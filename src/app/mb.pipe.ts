import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mB'
})
export class MBPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 0.000001;
  }

}
