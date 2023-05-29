import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ApiCommunicationService } from '../../api-communication.service';
import { Observable, of } from "rxjs"


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit{

  constructor(private apiProfiles: ApiCommunicationService) { }

  productForm = new FormGroup({
    city: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    postcode: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required)
  })





  allProfiles$!: Observable<any>
  getFromDB() {
    this.allProfiles$ = this.apiProfiles.getData();
  }
  postInDB() {
    this.allProfiles$ = this.apiProfiles.postData(this.productForm.value);
  }
  putInDB(id:number) {
    this.allProfiles$ = this.apiProfiles.updateData(this.productForm.value,id);
  }
  deleteFromDB(id:number) {
    this.allProfiles$ = this.apiProfiles.deleteData(id);
  }

  
  ngOnInit(): void {
    this.getFromDB()
  }
  subForm() {
    this.postInDB()
  }








  activeProfile!:number 
  modalShow(index:number) {
    this.activeProfile = index    
  }
}
