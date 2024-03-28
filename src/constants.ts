import { EhouType } from "./types/ehou";

/**
 * 恵方を定義
 */
export const ehouArray: EhouType[] = [
  {
    name: "甲",
    hira: "きのえ",
    kana: "キノエ",
    romaji: "kinoe",
    direction: {
      text: "東北東",
      azimuth: 75,
    },
    lastDigitOfTheYear: 4,
  },
  {
    name: "乙",
    hira: "きのと",
    kana: "キノト",
    romaji: "kinoto",
    direction: { text: "西南西", azimuth: 255 },
    lastDigitOfTheYear: 5,
  },
  {
    name: "丙",
    hira: "ひのえ",
    kana: "ヒノエ",
    romaji: "hinoe",
    direction: { text: "南南東", azimuth: 165 },
    lastDigitOfTheYear: 6,
  },
  {
    name: "丁",
    hira: "ひのと",
    kana: "ヒノト",
    romaji: "hinoto",
    direction: {
      text: "北北西",
      azimuth: 345,
    },
    lastDigitOfTheYear: 7,
  },
  {
    name: "戊",
    hira: "つちのえ",
    kana: "ツチノエ",
    romaji: "tsuchinoe",
    direction: {
      text: "南南東",
      azimuth: 165,
    },
    lastDigitOfTheYear: 8,
  },
  {
    name: "己",
    hira: "つちのと",
    kana: "ツチノト",
    romaji: "tsuchinoto",
    direction: {
      text: "東北東",
      azimuth: 75,
    },
    lastDigitOfTheYear: 9,
  },
  {
    name: "庚",
    hira: "かのえ",
    kana: "カノエ",
    romaji: "kanoe",
    direction: {
      text: "西南西",
      azimuth: 255,
    },
    lastDigitOfTheYear: 0,
  },
  {
    name: "辛",
    hira: "かのと",
    kana: "カノト",
    romaji: "kanoto",
    direction: {
      text: "南南東",
      azimuth: 165,
    },
    lastDigitOfTheYear: 1,
  },
  {
    name: "壬",
    hira: "みずのえ",
    kana: "ミズノエ",
    romaji: "mizunoe",
    direction: {
      text: "北北西",
      azimuth: 345,
    },
    lastDigitOfTheYear: 2,
  },
  {
    name: "癸",
    hira: "みずのと",
    kana: "ミズノト",
    romaji: "mizunoto",
    direction: {
      text: "南南東",
      azimuth: 165,
    },
    lastDigitOfTheYear: 3,
  },
];
