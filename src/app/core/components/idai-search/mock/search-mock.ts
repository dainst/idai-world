import {
  Concept,
  ExternalLink,
  Filter,
  FilterValues,
  Geometry,
  Image,
  Place,
  Project,
  SearchResult,
  Stakeholder,
  TemporalConcept,
} from "src/app/generated/search";
import faker from "faker";

export function makeSearchResult(results: number = 10): SearchResult {
  return {
    results: makeResults(results),
    filters: makeFilters(5),
  };
}

function makeFilters(amount: number): Filter[] {
  return arrayWith(amount, () => ({
    key: faker.lorem.word(),
    label: makeTranslatedContent(() => faker.random.word()),
    values: makeValues(5),
  }));
}

function makeValues(amount: number): FilterValues[] {
  return Array(amount)
    .fill(null)
    .map((_, idx) => ({
      count: Math.ceil(Math.random() * 200),
      key: `key-${idx + 1}`,
      label: makeTranslatedContent(() => faker.random.word()),
    }));
}

function makeResults(amount: number): Project[] {
  return arrayWith<Project>(amount, (idx) => ({
    id: `proj-id-${idx + 1}`,
    title: makeTranslatedContent(() =>
      faker.lorem.words(Math.ceil(Math.random() * 4))
    ),
    description: makeTranslatedContent(() => faker.lorem.paragraph(2)),
    start_date: faker.date.past().toISOString(),
    doi: faker.random.word(),
    end_date: faker.date.future().toISOString(),
    images: makeImages(5),
    temporal: makeTemporal(3),
    stakeholders: makeStakeholder(2),
    subject: makeConcepts(4),
    external_links: makeExternalLinks(1),
    spatial: makePlaces(),
  }));
}

function makeConcepts(amount: number): Concept[] {
  return arrayWith(amount, () => ({
    title: makeTranslatedContent(),
    uri: faker.internet.url(),
  }));
}

function makeStakeholder(amount: number): Stakeholder[] {
  return arrayWith(amount, () => ({
    role: "Manager",
    type: "Person",
    label: makeTranslatedContent(),
    uri: faker.internet.url(),
  }));
}

function makeTemporal(amount: number): TemporalConcept[] {
  return arrayWith(amount, () => ({
    begin: faker.date.past(1).getUTCFullYear(),
    title: makeTranslatedContent(() => faker.address.country()),
  }));
}

function makeTranslatedContent(
  fn: (...args: any[]) => string = faker.random.word
) {
  return { de: fn(), en: fn() };
}

function makeImages(amount: number): Image[] {
  return arrayWith(amount, () => ({
    label: makeTranslatedContent(),
    uri: `${faker.image.nature(200, 200)}?random=${Date.now()}`,
  }));
}

function makeExternalLinks(amount: number = 1): ExternalLink[] {
  return arrayWith<ExternalLink>(amount, () => ({
    label: makeTranslatedContent(() => faker.lorem.words()),
    role: "Data",
    uri: faker.internet.url(),
  }));
}

function makePlaces(amount: number = 1): Place[] {
  return arrayWith(amount, () => ({
    title: makeTranslatedContent(() => faker.address.county()),
    uri: faker.internet.url(),
    geometry: arrayWith(2, () => makeGeomentry()),
  }));
}

function makeGeomentry(): Geometry {
  return {
    type: "Point",
    coordinates: null,
  };
}

function arrayWith<T = any>(amount: number, generator: (idx: number) => T) {
  return Array(amount)
    .fill(null)
    .map((_, idx) => generator(idx));
}
