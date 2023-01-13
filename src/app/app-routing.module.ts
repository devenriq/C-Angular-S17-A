import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { WebComponent } from './pages/web/web.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent},
  {path:'portfolio', component:PortfolioComponent,
    children:[
      {path:'web', component:WebComponent}
    ]
  },
  {path:'404', component:BreakingComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
