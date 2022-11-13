import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gB'
})
export class GBPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*0.0000001;
  }

}
