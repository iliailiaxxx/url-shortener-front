import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss']
})
export class FormaComponent implements OnInit {
  @Output() passData = new EventEmitter<any>();

  productForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    sku: new FormControl("")
  })

  constructor() { }


  submittedArray: object[] = []  //store all submission
  subForm() {
    console.log(111);
    this.passData.emit(this.productForm.value)
  }

  ngOnInit(): void {

  }
}
