import { Component } from '@angular/core';
import { StatusObj } from 'src/app/interfaces/status-obj'


@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent {
  statusesObjects: StatusObj[] = [{
    id: 0,
    name: "someObj",
    status: "Published"
  },
  {
    id: 1,
    name: "someObj1",
    status: "Published"
  },
  {
    id: 2,
    name: "someObj2",
    status: "Inactive"
  },
  {
    id: 3,
    name: "someObj3",
    status: "Inactive"
  },
  {
    id: 4,
    name: "someObj4",
    status: "Draft"
  },
  {
    id: 5,
    name: "someObj5",
    status: "Draft"
  },
  {
    id: 6,
    name: "someObj6",
    status: "Scheduled"
  },
  {
    id: 7,
    name: "someObj7",
    status: "Scheduled"
  },]

  statuses: string[] = ["Published", "Draft", "Scheduled", "Inactive", "All"]

  sellectedStatus: string = "All"

  changeStatus(event: Event) {
    this.sellectedStatus = (event.target as HTMLInputElement).value;
  }

}
