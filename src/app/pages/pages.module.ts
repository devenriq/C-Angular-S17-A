import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './web/web.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BreakingComponent } from './breaking/breaking.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    WebComponent,
    BreakingComponent,
    AlmacenComponent,
    WarehouseDetailsComponent
  ],
  exports:[
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AppRoutingModule
  ]
})
export class PagesModule { }
