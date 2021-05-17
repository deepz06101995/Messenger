import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lord'
})
export class LordPipe implements PipeTransform {

  transform(value,index): unknown {
    if(index%2 == 0){
      value = 'Lord '+value;
    }
    return value;
  }

}
