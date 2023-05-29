import { Pipe, PipeTransform } from '@angular/core';
import { StatusObj } from 'src/app/interfaces/status-obj'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: StatusObj[], args: string): StatusObj[] {
    if (args === "All") {
      return value
    }
    return value.filter((event: StatusObj) => { return event.status === args ? true : false })
  }
}
