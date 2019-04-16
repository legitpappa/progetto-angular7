import { PipeTransform, Pipe } from '@angular/core';


@Pipe({ name: 'customPipe' })

export class CustomPipe implements PipeTransform {
  transform(value: string, argument: string) {

    return value.replace(' ', argument);
  }
}
