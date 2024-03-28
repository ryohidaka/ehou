import { ehouArray } from "./constants";
import { Current } from "./types";

/**
 * Ehou class
 */
export class Ehou {
  current: Current | undefined;
  last: Current | undefined;
  next: Current | undefined;

  constructor(year?: number) {
    const date = new Date();
    const currentYear = year || date.getFullYear();

    this.getCurrentEhou(currentYear);
    this.getLastEhou(currentYear - 1);
    this.getNextEhou(currentYear + 1);
  }

  /**
   * Get Current Year Ehou
   * @param year
   */
  getCurrentEhou = (year: number) => {
    const ehou = this.getEhou(year);
    this.current = {
      year: year,
      ehou: ehou,
    };
  };

  /**
   * Get Last Year Ehou
   * @param year
   */
  getLastEhou = (year: number) => {
    const ehou = this.getEhou(year);
    this.last = {
      year: year,
      ehou: ehou,
    };
  };

  /**
   * Get Next Year Ehou
   * @param year
   */
  getNextEhou = (year: number) => {
    const ehou = this.getEhou(year);
    this.next = {
      year: year,
      ehou: ehou,
    };
  };

  private getEhou = (year: number) => {
    const lastDigitStr = year.toString().slice(-1);
    const lastDigit = parseInt(lastDigitStr, 10);

    const ehou = ehouArray.filter(
      (ehou) => ehou.lastDigitOfTheYear === lastDigit,
    )[0];

    return ehou;
  };
}
