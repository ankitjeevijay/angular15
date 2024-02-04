import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AttributebindingComponent } from './databinding/attributebinding/attributebinding.component';
import { ClassbindingComponent } from './databinding/classbinding/classbinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { InterpolationbindingComponent } from './databinding/interpolationbinding/interpolationbinding.component';
import { PropertybindingComponent } from './databinding/propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'inter',
    component:InterpolationbindingComponent
  },
  {
    path:'property',
    component:PropertybindingComponent
  },
  {
    path:'classbinding',
    component:ClassbindingComponent
  },
  {
    path:'attributebinding',
    component:AttributebindingComponent
  },
  {
    path:'eventbinding',
    component:EventbindingComponent
  },
  {
    path:'twowaybinding',
    component:TwowaybindingComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent //this path use in last
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
