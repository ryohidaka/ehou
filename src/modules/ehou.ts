import { readFileSync } from "fs";
import { load } from "js-yaml";
import { EhouType } from "../types/ehou";

export const getEhou = (year: number) => {
  const ehouArray = load(readFileSync("src/ehou.yaml", "utf8")) as EhouType[];

  const lastDigitStr = year.toString().slice(-1);
  const lastDigit = parseInt(lastDigitStr, 10);

  const ehou = ehouArray.filter(
    (ehou) => ehou.lastDigitOfTheYear === lastDigit
  )[0];

  return ehou;
};
