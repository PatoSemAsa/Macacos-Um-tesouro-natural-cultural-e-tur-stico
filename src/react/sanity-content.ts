import { createClient } from "@sanity/client";
import {
  defaultSiteContent,
  type AgendaDay,
  type AboutContent,
  type DiaryChapter,
  type Experience,
  type SiteContent,
  type SiteSettings,
} from "./site-data";

type RawDocument = Record<string, unknown>;

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim() || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION?.trim() || "2026-07-15";

const contentQuery = `{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    seasonLabel, heroTitleStart, heroTitleHighlight, heroTitleEnd, heroDescription,
    countdownDate, introLabel, introText, instagramUrl, instagramLabel,
    footerDescription, locationName, locationRegion, mapUrl,
    "churchHeroImage": coalesce(churchHeroImage.asset->url, churchHeroImageUrl),
    "churchAboutImage": coalesce(churchAboutImage.asset->url, churchAboutImageUrl)
  },
  "about": *[_type == "aboutPage" && _id == "aboutPage"][0]{
    eyebrow, title, lead, projectTitle, projectParagraphs,
    territoryTitle, territoryParagraphs, associationTitle, associationParagraphs
  },
  "experiences": *[_type == "experience" && active != false] | order(order asc){
    "slug": slug.current, title, shortTitle, kind, period, deadline, eyebrow,
    description, "href": pageUrl, "form": formUrl, "regulation": regulationUrl,
    accent, number, dateShort, kicker, badges, overviewEyebrow, overviewTitle,
    overviewText, bodyParagraphs, facts, featureCards[]{value,label,title,text},
    schedule[]{date,title,place,time,description}, prizes[]{place,reward},
    extraLinks[]{label,url}, "image": coalesce(coverImage.asset->url, imageUrl),
    "posterImage": coalesce(posterImage.asset->url, posterImageUrl)
  },
  "agenda": *[_type == "agendaEntry" && active != false] | order(order asc){
    "id": slug.current, dateLabel, category, title, place,
    activities[]{time,title,text}, "href": coalesce(experience->pageUrl, experienceLink),
    "image": coalesce(coverImage.asset->url, imageUrl)
  },
  "diary": *[_type == "diaryPost" && active != false] | order(order asc, publishedAt desc){
    number, "slug": slug.current, tag, title, dateLabel, publishedAt, description,
    bodyParagraphs, status, videoUrl, "image": coalesce(coverImage.asset->url, imageUrl),
    "gallery": gallery[].asset->url
  }
}`;

function stringValue(value: unknown, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function stringList(value: unknown, fallback: string[] = []) {
  if (!Array.isArray(value)) return fallback;
  const result = value.map((item) => stringValue(item)).filter(Boolean);
  return result.length ? result : fallback;
}

function objectList(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is RawDocument => !!item && typeof item === "object") : [];
}

function mapSettings(raw: unknown): SiteSettings {
  const row = raw && typeof raw === "object" ? raw as RawDocument : {};
  const fallback = defaultSiteContent.settings;
  return {
    seasonLabel: stringValue(row.seasonLabel, fallback.seasonLabel),
    heroTitleStart: stringValue(row.heroTitleStart, fallback.heroTitleStart),
    heroTitleHighlight: stringValue(row.heroTitleHighlight, fallback.heroTitleHighlight),
    heroTitleEnd: stringValue(row.heroTitleEnd, fallback.heroTitleEnd),
    heroDescription: stringValue(row.heroDescription, fallback.heroDescription),
    countdownDate: stringValue(row.countdownDate, fallback.countdownDate),
    introLabel: stringValue(row.introLabel, fallback.introLabel),
    introText: stringValue(row.introText, fallback.introText),
    instagramUrl: stringValue(row.instagramUrl, fallback.instagramUrl),
    instagramLabel: stringValue(row.instagramLabel, fallback.instagramLabel),
    footerDescription: stringValue(row.footerDescription, fallback.footerDescription),
    locationName: stringValue(row.locationName, fallback.locationName),
    locationRegion: stringValue(row.locationRegion, fallback.locationRegion),
    churchHeroImage: stringValue(row.churchHeroImage, fallback.churchHeroImage),
    churchAboutImage: stringValue(row.churchAboutImage, fallback.churchAboutImage),
    mapUrl: stringValue(row.mapUrl, fallback.mapUrl),
  };
}

function mapAbout(raw: unknown): AboutContent {
  const row = raw && typeof raw === "object" ? raw as RawDocument : {};
  const fallback = defaultSiteContent.about;
  return {
    eyebrow: stringValue(row.eyebrow, fallback.eyebrow),
    title: stringValue(row.title, fallback.title),
    lead: stringValue(row.lead, fallback.lead),
    projectTitle: stringValue(row.projectTitle, fallback.projectTitle),
    projectParagraphs: stringList(row.projectParagraphs, fallback.projectParagraphs),
    territoryTitle: stringValue(row.territoryTitle, fallback.territoryTitle),
    territoryParagraphs: stringList(row.territoryParagraphs, fallback.territoryParagraphs),
    associationTitle: stringValue(row.associationTitle, fallback.associationTitle),
    associationParagraphs: stringList(row.associationParagraphs, fallback.associationParagraphs),
  };
}

function mapExperiences(raw: unknown): Experience[] {
  const rows = objectList(raw);
  const result = rows.map((row, index) => {
    const slug = stringValue(row.slug);
    const fallback = defaultSiteContent.experiences.find((item) => item.slug === slug) ?? defaultSiteContent.experiences[index % defaultSiteContent.experiences.length];
    const kind = row.kind === "natureza" || row.kind === "arte" || row.kind === "cultura" ? row.kind : fallback.kind;
    const featureCards = objectList(row.featureCards).map((card) => ({ value: stringValue(card.value), label: stringValue(card.label), title: stringValue(card.title), text: stringValue(card.text) })).filter((card) => card.title);
    const schedule = objectList(row.schedule).map((entry) => ({ date: stringValue(entry.date), title: stringValue(entry.title), place: stringValue(entry.place), time: stringValue(entry.time), description: stringValue(entry.description) })).filter((entry) => entry.title);
    const prizes = objectList(row.prizes).map((prize) => ({ place: stringValue(prize.place), reward: stringValue(prize.reward) })).filter((prize) => prize.reward);
    const extraLinks = objectList(row.extraLinks).map((link) => ({ label: stringValue(link.label), url: stringValue(link.url) })).filter((link) => link.label && link.url);
    return {
      ...fallback,
      slug: slug || fallback.slug,
      title: stringValue(row.title, fallback.title),
      shortTitle: stringValue(row.shortTitle, fallback.shortTitle),
      kind,
      period: stringValue(row.period, fallback.period),
      deadline: stringValue(row.deadline, fallback.deadline),
      eyebrow: stringValue(row.eyebrow, fallback.eyebrow),
      description: stringValue(row.description, fallback.description),
      href: stringValue(row.href, fallback.href),
      form: stringValue(row.form, fallback.form),
      regulation: stringValue(row.regulation, fallback.regulation),
      accent: stringValue(row.accent, fallback.accent),
      number: stringValue(row.number, fallback.number),
      image: stringValue(row.image, fallback.image),
      posterImage: stringValue(row.posterImage, fallback.posterImage),
      dateShort: stringValue(row.dateShort, fallback.dateShort),
      kicker: stringValue(row.kicker, fallback.kicker),
      badges: stringList(row.badges, fallback.badges),
      overviewEyebrow: stringValue(row.overviewEyebrow, fallback.overviewEyebrow),
      overviewTitle: stringValue(row.overviewTitle, fallback.overviewTitle),
      overviewText: stringValue(row.overviewText, fallback.overviewText),
      bodyParagraphs: stringList(row.bodyParagraphs, fallback.bodyParagraphs),
      facts: stringList(row.facts, fallback.facts),
      featureCards: featureCards.length ? featureCards : fallback.featureCards,
      schedule: schedule.length ? schedule : fallback.schedule,
      prizes: row.prizes === undefined ? fallback.prizes : prizes,
      extraLinks: row.extraLinks === undefined ? fallback.extraLinks : extraLinks,
    } satisfies Experience;
  });
  return result.length ? result : defaultSiteContent.experiences;
}

function mapAgenda(raw: unknown): AgendaDay[] {
  const rows = objectList(raw);
  const result = rows.map((row, index) => {
    const id = stringValue(row.id);
    const fallback = defaultSiteContent.agenda.find((item) => item.id === id) ?? defaultSiteContent.agenda[index % defaultSiteContent.agenda.length];
    const activities = objectList(row.activities).map((activity) => ({ time: stringValue(activity.time), title: stringValue(activity.title), text: stringValue(activity.text) })).filter((activity) => activity.title);
    return {
      ...fallback,
      id: id || fallback.id,
      date: stringValue(row.dateLabel, fallback.date),
      label: stringValue(row.category, fallback.label),
      image: stringValue(row.image, fallback.image),
      title: stringValue(row.title, fallback.title),
      place: stringValue(row.place, fallback.place),
      items: activities.length ? activities : fallback.items,
      href: stringValue(row.href, fallback.href),
    } satisfies AgendaDay;
  });
  return result.length ? result : defaultSiteContent.agenda;
}

function mapDiary(raw: unknown): DiaryChapter[] {
  const rows = objectList(raw);
  const result = rows.map((row, index) => {
    const number = stringValue(row.number);
    const fallback = defaultSiteContent.diary.find((item) => item.n === number) ?? defaultSiteContent.diary[index % defaultSiteContent.diary.length];
    return {
      ...fallback,
      n: number || fallback.n,
      slug: stringValue(row.slug, fallback.slug),
      tag: stringValue(row.tag, fallback.tag),
      title: stringValue(row.title, fallback.title),
      date: stringValue(row.dateLabel, fallback.date),
      publishedAt: stringValue(row.publishedAt, fallback.publishedAt),
      image: stringValue(row.image, fallback.image),
      text: stringValue(row.description, fallback.text),
      bodyParagraphs: stringList(row.bodyParagraphs, fallback.bodyParagraphs),
      gallery: stringList(row.gallery, fallback.gallery),
      status: stringValue(row.status, fallback.status),
      videoUrl: stringValue(row.videoUrl, fallback.videoUrl),
    } satisfies DiaryChapter;
  });
  return result.length ? result : defaultSiteContent.diary;
}

export async function loadSanityContent(): Promise<SiteContent | null> {
  if (!projectId) return null;
  try {
    const client = createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: "published" });
    const result = await client.fetch<Record<string, unknown>>(contentQuery);
    return {
      settings: mapSettings(result.settings),
      about: mapAbout(result.about),
      experiences: mapExperiences(result.experiences),
      agenda: mapAgenda(result.agenda),
      diary: mapDiary(result.diary),
    };
  } catch (error) {
    console.warn("Não foi possível carregar o conteúdo do Sanity; usando a cópia de segurança.", error);
    return null;
  }
}
