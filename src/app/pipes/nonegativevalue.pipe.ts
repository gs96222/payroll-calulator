import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nonegativevalue'})
export class NoNegativeValue implements PipeTransform {
  transform(value: number): number {
    if(value < 0) {
      value = 0;
      return value;
    }
    return value
  }
}