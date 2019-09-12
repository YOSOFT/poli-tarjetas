import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../tarjeta';


export abstract class TarjetaService {
  apiUrl = 'api/tarjetas';
  abstract obtenerTarjetas(): Observable<Tarjeta[]>;
  abstract obtenerTarjeta(id: number): Observable<Tarjeta>;
  abstract agregarTarjeta(tarjeta: Tarjeta): Observable<Tarjeta>;
  abstract actualizarTarjeta(tarjeta: Tarjeta): Observable<Tarjeta[]>;
  abstract eliminarTarjeta(): Observable<Tarjeta[]>;
  constructor() { }
}
