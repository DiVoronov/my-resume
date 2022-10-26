export type ObjectLanguage = {
  en: string,
  ua: string
};

export type ObjectLanguageParagraph = {
  en: string[],
  ua: string[]
};

export type ComplexParagraphs = {
  index: number,
  type: string,
  value: string
};

export type ObjectLanguageArrayOfObjects = {
  en: ComplexParagraphs[],
  ua: ComplexParagraphs[]
};