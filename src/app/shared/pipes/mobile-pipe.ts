import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilePipe',
  standalone: true
})
export class MobilePipe implements PipeTransform {

  transform(value: string) {
    if (value != null && value.length === 11) {
      return '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7);
    } else {
      return value;
    }
  }

}
