import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RammurtinaiduComponent } from './rammurtinaidu/rammurtinaidu.component';

import { SquidgameComponent } from './squidgame/squidgame.component';


const routes: Routes = [
  {path : 'संपर्क', component:ContactusComponent},
  {path : '', component:HomepageComponent},
  {path : 'aboutus', component:AboutusComponent},
  {path : '1', component:RammurtinaiduComponent},
  {path : 'ब्लॉग', component:BlogComponent},
  {path : '2', component:SquidgameComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [RammurtinaiduComponent,SquidgameComponent]