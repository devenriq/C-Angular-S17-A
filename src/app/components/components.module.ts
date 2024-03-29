import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class ComponentsModule { }
