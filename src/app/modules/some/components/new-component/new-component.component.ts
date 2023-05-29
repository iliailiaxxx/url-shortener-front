import { Component, } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {
  constructor() { }

  files: File[] = []

  url: string | ArrayBuffer | null = "https://cdn.icon-icons.com/icons2/1875/PNG/512/imagegallery_120168.png" // custom url

  changeImg(e: any) {  
    this.files.push(e.target.files)
    console.log(this.files);// loging in colsole

    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result; // display image
      };
    }
  }
}


//general reactive form with error and display + save button in clonsole log


//routing resolver