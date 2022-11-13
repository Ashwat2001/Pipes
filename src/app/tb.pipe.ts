import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tB'
})
export class TBPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*0.0000000000001;
  }

}
