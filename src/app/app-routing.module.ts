import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontejnerTtzComponent } from './components/kontejner-ttz/kontejner-ttz.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';


const routes: Routes = [
  {
    path: '',
    component: PocetnaComponent
  },
  {
    path: 'trening',
    component: KontejnerTtzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
