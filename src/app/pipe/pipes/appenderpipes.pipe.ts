import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender'
})
export class AppenderpipesPipe implements PipeTransform {

  transform(value: string): string {
    return 'mailto://'+value;
  }

}
