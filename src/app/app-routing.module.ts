import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './module/homepage/homepage.component';
import { ServicesComponent } from './module/services/services.component';
import { AboutComponent } from './module/about/about.component';
import { ContactComponent } from './module/contact/contact.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
},
{
  path: 'Services',
  component: ServicesComponent
},
{
  path: 'About',
  component: AboutComponent
},
{
  path: 'ContactUs',
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
