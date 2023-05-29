import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeModule } from './modules/some/some.module';
import { ProfilesModule } from './modules/profiles/profiles.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ProfilesModule,
    SomeModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
