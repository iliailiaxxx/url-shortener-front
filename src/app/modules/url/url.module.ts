import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlComponent } from './components/url/url.component';
import { ApiCommunicationService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UrlComponent 
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers:[ApiCommunicationService],
  exports:[UrlComponent]
})
export class UrlModule { }
