import { Component, ElementRef,ViewChild } from '@angular/core';
import { ExcelService } from './excel.service';
import { ExcelArrayService } from './excel-array.service';


@Component({
  selector: 'app-excell-dummy',
  templateUrl: './excell-dummy.component.html',
  styleUrls: ['./excell-dummy.component.scss']
})
export class ExcellDummyComponent {

  @ViewChild('table') table!: ElementRef;
  
  constructor(private excel: ExcelService,private excellArray:ExcelArrayService) { }
  userList = [

    {

      "id": 1,

      "name": "Leanne Graham",

      "username": "Bret",

      "email": "Sincere@april.biz"

    },

    {

      "id": 2,

      "name": "Ervin Howell",

      "username": "Antonette",

      "email": "Shanna@melissa.tv"

    },

    {

      "id": 3,

      "name": "Clementine Bauch",

      "username": "Samantha",

      "email": "Nathan@yesenia.net"

    },

    {

      "id": 4,

      "name": "Patricia Lebsack",

      "username": "Karianne",

      "email": "Julianne.OConner@kory.org"

    },

    {

      "id": 5,

      "name": "Chelsey Dietrich",

      "username": "Kamren",

      "email": "Lucio_Hettinger@annie.ca"

    }

  ]
  exportexcel(): void {
    //this.excellArray.createFile(this.userList)
     
    this.excel.createFile(this.table.nativeElement)
  }
}
