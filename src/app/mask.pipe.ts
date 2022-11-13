import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value = value.replace(/\d(?=\d{4})/g, "*");;
  }

}
