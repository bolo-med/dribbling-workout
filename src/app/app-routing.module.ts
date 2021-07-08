import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { TreningComponent } from './components/trening/trening.component';


const routes: Routes = [
  {
    path: '',
    component: PocetnaComponent
  },
  {
    path: 'trening',
    component: TreningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
