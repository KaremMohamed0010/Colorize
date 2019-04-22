import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from './components/gradient/gradient.component';
import { BoxshadowComponent } from './components/boxshadow/boxshadow.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'box-shadow',
    component:BoxshadowComponent
  },
 {
  path: 'about',
  component:AboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
