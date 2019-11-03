import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  // This  method will tranform the string into a slug format.
  // This removes spaces, special characters from the given string.
  transform(input: string): string {
    return input.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

}
