import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let prefix = args[0] ? args[0] : 'MXN';
    let sign = args[1] ? args[1] : '$';
    return `${prefix} ${sign} ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

}
