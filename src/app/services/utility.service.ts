import { Injectable } from '@angular/core';
import { HIKE_PERCENT } from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  getAmountAfterTax(amount: number, tax: number) {
    return amount * (1 - tax);
  }

  expereincedIncrementSalary(experience: number, basic: number) {
    return basic + this.getExpereinceHikePercent(experience) * basic;
  }

  getExpereinceHikePercent(experience: number) {
    if (experience >= 0 && experience <= 3) {
      return HIKE_PERCENT.CATEGORY_1;
    } else if (experience >= 4 && experience <= 7) {
      return HIKE_PERCENT.CATEGORY_2;
    }
    if (experience >= 8 && experience <= 10) {
      return HIKE_PERCENT.CATEGORY_3;
    } else {
      return HIKE_PERCENT.CATEGORY_4;
    }
  }
}
