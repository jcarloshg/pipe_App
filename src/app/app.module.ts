import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


// local de la app
import localES_HON from '@angular/common/locales/es-HN';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localES_HON);
registerLocaleData(localFR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNGModule,
    AppRouterModule,
    VentasModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-HN'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
