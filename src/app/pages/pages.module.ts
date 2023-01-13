import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent
  ],
  exports:[
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
