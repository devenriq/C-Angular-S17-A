import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './web/web.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    WebComponent
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
