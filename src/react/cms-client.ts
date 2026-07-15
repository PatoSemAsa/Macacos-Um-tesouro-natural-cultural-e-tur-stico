"use client";

import { items } from "@wix/data";
import { useEffect, useState } from "react";
import { loadSanityContent } from "./sanity-content";
import {
  agendaDays,
  aboutContent,
  defaultSiteContent,
  diaryChapters,
  experiences,
  siteSettings,
  type AgendaDay,
  type DiaryChapter,
  type Experience,
  type SiteContent,
  type SiteSettings,
} from "./site-data";

type CmsRow = Record<string, unknown>;

const collectionIds = {
  settings: "SiteSettings",
  experiences: "Experiences",
  agenda: "Agenda",
  diary: "Diary",
} as const;

function text(value: unknown, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function enabled(value: unknown) {
  return value !== false;
}

function dateText(value: unknown, fallback: string) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  if (typeof value === "string" && value.trim()) return value.trim();
  if (value && typeof value === "object" && "$date" in value) {
    return text((value as { $date?: unknown }).$date, fallback);
  }
  return fallback;
}

function wixImageToUrl(value: unknown, fallback: string) {
  if (value && typeof value === "object") {
    const candidate = value as { url?: unknown; src?: unknown };
    value = candidate.url ?? candidate.src;
  }

  if (typeof value !== "string" || !value.trim()) return fallback;
  const source = value.trim();
  if (!source.startsWith("wix:image://v1/")) return source;

  const mediaPath = source.slice("wix:image://v1/".length).split("#")[0];
  const mediaId = mediaPath.split("/")[0];
  return mediaId ? `https://static.wixstatic.com/media/${encodeURIComponent(decodeURIComponent(mediaId))}` : fallback;
}

async function queryCollection(collectionId: string, orderField = "order") {
  try {
    const result = await items.query(collectionId).ascending(orderField).limit(100).find();
    return (result.items ?? []) as CmsRow[];
  } catch {
    return [];
  }
}

function mapSettings(rows: CmsRow[]): SiteSettings {
  const row = rows[0];
  if (!row) return siteSettings;

  return {
    seasonLabel: text(row.seasonLabel, siteSettings.seasonLabel),
    heroTitleStart: text(row.heroTitleStart, siteSettings.heroTitleStart),
    heroTitleHighlight: text(row.heroTitleHighlight, siteSettings.heroTitleHighlight),
    heroTitleEnd: text(row.heroTitleEnd, siteSettings.heroTitleEnd),
    heroDescription: text(row.heroDescription, siteSettings.heroDescription),
    countdownDate: dateText(row.countdownDate, siteSettings.countdownDate),
    introLabel: text(row.introLabel, siteSettings.introLabel),
    introText: text(row.introText, siteSettings.introText),
    instagramUrl: text(row.instagramUrl, siteSettings.instagramUrl),
    instagramLabel: text(row.instagramLabel, siteSettings.instagramLabel),
    footerDescription: text(row.footerDescription, siteSettings.footerDescription),
    locationName: text(row.locationName, siteSettings.locationName),
    locationRegion: text(row.locationRegion, siteSettings.locationRegion),
    churchHeroImage: wixImageToUrl(row.churchHeroImage ?? row.churchHeroImageUrl, siteSettings.churchHeroImage),
    churchAboutImage: wixImageToUrl(row.churchAboutImage ?? row.churchAboutImageUrl, siteSettings.churchAboutImage),
    mapUrl: text(row.mapUrl, siteSettings.mapUrl),
  };
}

function mapExperiences(rows: CmsRow[]): Experience[] {
  const mapped = rows
    .filter((row) => enabled(row.active))
    .map((row, index) => {
      const slug = text(row.slug);
      const fallback = experiences.find((item) => item.slug === slug) ?? experiences[index % experiences.length];
      const kind = row.kind === "natureza" || row.kind === "arte" || row.kind === "cultura" ? row.kind : fallback.kind;
      return {
        ...fallback,
        slug: slug || fallback.slug,
        title: text(row.title, fallback.title),
        shortTitle: text(row.shortTitle, fallback.shortTitle),
        kind,
        period: text(row.period, fallback.period),
        deadline: text(row.deadline, fallback.deadline),
        eyebrow: text(row.eyebrow, fallback.eyebrow),
        description: text(row.description, fallback.description),
        href: text(row.pageUrl, fallback.href),
        form: text(row.formUrl, fallback.form),
        regulation: text(row.regulationUrl, fallback.regulation),
        accent: text(row.accent, fallback.accent),
        number: text(row.number, fallback.number),
        image: wixImageToUrl(row.image ?? row.imageUrl, fallback.image),
        dateShort: text(row.dateShort, fallback.dateShort),
      } satisfies Experience;
    });
  return mapped.length ? mapped : experiences;
}

function agendaItem(row: CmsRow, position: 1 | 2, fallback: AgendaDay["items"][number]) {
  return {
    time: text(row[`time${position}`], fallback.time),
    title: text(row[`activity${position}`], fallback.title),
    text: text(row[`description${position}`], fallback.text),
  };
}

function mapAgenda(rows: CmsRow[]): AgendaDay[] {
  const mapped = rows
    .filter((row) => enabled(row.active))
    .map((row, index) => {
      const id = text(row.idSlug);
      const fallback = agendaDays.find((day) => day.id === id) ?? agendaDays[index % agendaDays.length];
      return {
        ...fallback,
        id: id || fallback.id,
        date: text(row.dateLabel, fallback.date),
        label: text(row.category, fallback.label),
        image: wixImageToUrl(row.image ?? row.imageUrl, fallback.image),
        title: text(row.title, fallback.title),
        place: text(row.place, fallback.place),
        items: [
          agendaItem(row, 1, fallback.items[0]),
          agendaItem(row, 2, fallback.items[1] ?? fallback.items[0]),
        ],
        href: text(row.experienceLink, fallback.href),
      } satisfies AgendaDay;
    });
  return mapped.length ? mapped : agendaDays;
}

function mapDiary(rows: CmsRow[]): DiaryChapter[] {
  const mapped = rows
    .filter((row) => enabled(row.active))
    .map((row, index) => {
      const chapterNumber = text(row.number);
      const fallback = diaryChapters.find((chapter) => chapter.n === chapterNumber) ?? diaryChapters[index % diaryChapters.length];
      return {
        ...fallback,
        n: chapterNumber || fallback.n,
        tag: text(row.tag, fallback.tag),
        title: text(row.title, fallback.title),
        date: text(row.dateLabel, fallback.date),
        image: wixImageToUrl(row.image ?? row.imageUrl, fallback.image),
        text: text(row.description, fallback.text),
        status: text(row.status, fallback.status),
        videoUrl: text(row.videoUrl, fallback.videoUrl),
      } satisfies DiaryChapter;
    });
  return mapped.length ? mapped : diaryChapters;
}

let cachedRequest: Promise<SiteContent> | undefined;

async function loadWixContent(): Promise<SiteContent> {
  const [settingsRows, experienceRows, agendaRows, diaryRows] = await Promise.all([
    queryCollection(collectionIds.settings, "_createdDate"),
    queryCollection(collectionIds.experiences),
    queryCollection(collectionIds.agenda),
    queryCollection(collectionIds.diary),
  ]);
  return {
    settings: mapSettings(settingsRows),
    about: aboutContent,
    experiences: mapExperiences(experienceRows),
    agenda: mapAgenda(agendaRows),
    diary: mapDiary(diaryRows),
  };
}

export function loadSiteContent() {
  if (!cachedRequest) {
    cachedRequest = loadSanityContent().then((content) => content ?? loadWixContent()).catch(() => defaultSiteContent);
  }
  return cachedRequest;
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    let active = true;
    loadSiteContent().then((next) => {
      if (active) setContent(next);
    });
    return () => {
      active = false;
    };
  }, []);

  return content;
}
