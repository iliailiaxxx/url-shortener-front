import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UrlModule } from './modules/url/url.module';
import { ApiCommunicationService } from './modules/url/services/api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule, 
    UrlModule,
    BrowserModule,
  ],
  providers: [ApiCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
