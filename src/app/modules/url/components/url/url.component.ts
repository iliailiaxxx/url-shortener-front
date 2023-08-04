import { Component } from '@angular/core';
import { ApiCommunicationService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {
  constructor(private api: ApiCommunicationService) { }

  url: string = ""
  
  urlForm = new FormGroup({
    url: new FormControl("", Validators.required),
  })

  async subForm() {
    console.log(1);
     
    await this.api.postUrl(this.urlForm.value).subscribe((data) => {
      this.url = data.shortUrl
    })
    
   
  }

}
