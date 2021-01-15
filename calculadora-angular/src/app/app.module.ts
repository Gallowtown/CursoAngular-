import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioCalcComponent } from './formulario-calc/formulario-calc.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCalcComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
