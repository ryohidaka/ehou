import { getEhou } from "./modules/ehou";
import { Current } from "./types/ehou";

/**
 * Ehou class
 */
export default class Ehou {
  current: Current;

  constructor(year?: number) {
    const date = new Date();
    const currentYear = year || date.getFullYear();

    this.getCurrentEhou(currentYear);
  }

  /**
   * Get Current Year Ehou
   * @param year
   */
  getCurrentEhou = (year: number) => {
    const ehou = getEhou(year);
    this.current = {
      year: year,
      ehou: ehou,
    };
  };
}
