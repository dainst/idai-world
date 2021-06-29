import {Pipe, PipeTransform } from '@angular/core';
import {TranslatedContent} from 'src/app/generated/search';

@Pipe({name: 't'})

export class TranslatePipe implements PipeTransform {
  transform(value: Array<TranslatedContent>, ...args: any[]): any {
    // No value leads to empty result
    if (value.length === 0) {
      return '';
    }

    // Check for english translation first
    const en = value.find(v => v.lang === 'en');

    if (en) {
      return en.text;
    }

    // Pick the next available
    return value[0].text;
  }
}
