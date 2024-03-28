import { ehouArray } from "../constants";

export const getEhou = (year: number) => {
  const lastDigitStr = year.toString().slice(-1);
  const lastDigit = parseInt(lastDigitStr, 10);

  const ehou = ehouArray.filter(
    (ehou) => ehou.lastDigitOfTheYear === lastDigit,
  )[0];

  return ehou;
};
