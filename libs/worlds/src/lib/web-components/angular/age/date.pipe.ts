import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cfDate' })
export class DatePipe implements PipeTransform {
  transform(dateInput: number | string | Date): Date {
    const date = new Date(dateInput);
    return date;
  }
}
