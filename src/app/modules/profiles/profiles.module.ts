import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCommunicationService } from './api-communication.service';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ProfilesComponent],
  providers:[ApiCommunicationService]
})
export class ProfilesModule { }
