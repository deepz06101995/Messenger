import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calls'
})
export class CallsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
