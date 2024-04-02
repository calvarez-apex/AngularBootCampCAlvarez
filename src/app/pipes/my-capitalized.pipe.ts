import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCapitalized'
})
export class MyCapitalizedPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split(' ')
                .map((s: string) => s.charAt(0).toLocaleUpperCase() + s.substring(1))
                .join(' ');;
  }

}
