import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    value = 'Bye World'
    return value;
  }

}
