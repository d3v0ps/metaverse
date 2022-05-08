import { Pipe, PipeTransform } from '@angular/core';
import { camel, constant, kebab, pascal } from 'case';

export type TransformType = 'pascal' | 'kebab' | 'camel' | 'constant';

@Pipe({
  name: 'cfCase',
})
export class CasePipe implements PipeTransform {
  transformTypes: Record<TransformType, (value: string) => string> = {
    pascal,
    kebab,
    camel,
    constant,
  };

  transform(value: string, transformType: TransformType = 'pascal'): string {
    return this.transformTypes[transformType](value);
  }
}
