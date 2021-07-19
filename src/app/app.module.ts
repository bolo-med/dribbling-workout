import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { FormsModule } from '@angular/forms';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { TreningComponent } from './components/trening/trening.component';
import { OpisiVjezbiComponent } from './components/opisi-vjezbi/opisi-vjezbi.component';
import { VideoPlejerComponent } from './components/video-plejer/video-plejer.component';
import { SekundeFormatPipe } from './pipes/sekunde-format.pipe';
import { ZvucnaSignalizacijaDirective } from './directives/zvucna-signalizacija.directive';
import { TreningZvukComponent } from './components/trening-zvuk/trening-zvuk.component';
import { KontejnerTtzComponent } from './components/kontejner-ttz/kontejner-ttz.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    TreningComponent,
    OpisiVjezbiComponent,
    VideoPlejerComponent,
    SekundeFormatPipe,
    ZvucnaSignalizacijaDirective,
    TreningZvukComponent,
    KontejnerTtzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
