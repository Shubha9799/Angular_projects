import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
 name:title
})
export class TitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value,args)
    return null;
  }

}
