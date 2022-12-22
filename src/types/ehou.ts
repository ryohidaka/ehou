export type EhouType = {
  name: string;
  kana: string;
  romaji: string;
  direction: Direction;
  lastDigitOfTheYear: number;
};

type Direction = {
  text: string;
  azimuth: number;
};

export type Current = {
  year: number;
  ehou: EhouType;
};
