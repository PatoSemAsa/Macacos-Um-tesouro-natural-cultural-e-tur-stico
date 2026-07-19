import { getCliClient } from "sanity/cli";
import {
  aboutContent,
  agendaDays,
  diaryChapters,
  experiences,
  featuredVlog,
  siteSettings,
} from "../../src/react/site-data.ts";

const client = getCliClient({ apiVersion: "2026-07-15" });

const key = (prefix, index) => `${prefix}-${String(index + 1).padStart(2, "0")}`;

const settingsDocument = (() => {
  const { churchHeroImage, churchAboutImage, ...rest } = siteSettings;
  return {
    _id: "siteSettings",
    _type: "siteSettings",
    ...rest,
    churchHeroImageUrl: churchHeroImage,
    churchAboutImageUrl: churchAboutImage,
  };
})();

const aboutDocument = {
  _id: "aboutPage",
  _type: "aboutPage",
  ...aboutContent,
};

const experienceDocuments = experiences.map((item) => {
  const {
    slug,
    href,
    form,
    regulation,
    image,
    posterImage,
    featureCards,
    schedule,
    prizes,
    extraLinks,
    ...rest
  } = item;
  return {
    _id: `experience-${slug}`,
    _type: "experience",
    ...rest,
    slug: { _type: "slug", current: slug },
    pageUrl: href,
    formUrl: form,
    regulationUrl: regulation,
    imageUrl: image,
    posterImageUrl: posterImage,
    active: true,
    order: Number(item.number) || 1,
    featureCards: featureCards.map((card, index) => ({ _type: "contentCard", _key: key("card", index), ...card })),
    schedule: schedule.map((entry, index) => ({ _type: "scheduleEntry", _key: key("schedule", index), ...entry })),
    prizes: prizes.map((entry, index) => ({ _type: "prize", _key: key("prize", index), ...entry })),
    extraLinks: extraLinks.map((entry, index) => ({ _type: "contentLink", _key: key("link", index), ...entry })),
  };
});

const agendaDocuments = agendaDays.map((item, index) => {
  const { id, date, label, image, items, href, ...rest } = item;
  const relatedSlug = href.replace(/^\//, "");
  return {
    _id: `agenda-${id}`,
    _type: "agendaEntry",
    ...rest,
    slug: { _type: "slug", current: id },
    dateLabel: date,
    category: label,
    imageUrl: image,
    activities: items.map((activity, activityIndex) => ({ _type: "agendaActivity", _key: key(`activity-${index + 1}`, activityIndex), ...activity })),
    experience: { _type: "reference", _ref: `experience-${relatedSlug}` },
    experienceLink: href,
    active: true,
    order: index + 1,
  };
});

const diaryDocuments = diaryChapters.map((item, index) => {
  const { n, slug, date, image, text, gallery: _gallery, ...rest } = item;
  return {
    _id: `diary-${slug}`,
    _type: "diaryPost",
    ...rest,
    number: n,
    slug: { _type: "slug", current: slug },
    dateLabel: date,
    imageUrl: image,
    description: text,
    active: true,
    order: index + 1,
  };
});

const featuredVlogDocument = (() => {
  const { image, ...rest } = featuredVlog;
  return {
    _id: "featuredVlog",
    _type: "featuredVlog",
    ...rest,
    imageUrl: image,
  };
})();

const documents = [settingsDocument, aboutDocument, featuredVlogDocument, ...experienceDocuments, ...agendaDocuments, ...diaryDocuments];
let transaction = client.transaction();
for (const document of documents) transaction = transaction.createOrReplace(document);

await transaction.commit();
console.log(`Conteúdo inicial concluído: ${documents.length} documentos criados ou atualizados.`);
