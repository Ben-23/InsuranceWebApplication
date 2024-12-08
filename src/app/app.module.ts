import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './module/homepage/homepage.component';
import { ServicesComponent } from './module/services/services.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './module/about/about.component';
import { ContactComponent } from './module/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServicesComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
