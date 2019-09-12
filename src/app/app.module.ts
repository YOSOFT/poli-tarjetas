import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatButtonModule, MatIconModule} from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TarjetaEnMemoriaApiService } from './services/tarjeta-en-memoria-api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListaTarjetasComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TarjetaEnMemoriaApiService, {delay: 1000})
  ],
  providers: [TarjetaEnMemoriaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
