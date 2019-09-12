import { Injectable } from '@angular/core';
import { TarjetaService } from './tarjeta.service';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Tarjeta } from '../tarjeta';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientTarjetaService extends TarjetaService {
  obtenerTarjetas(): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(this.apiUrl).pipe(
      tap(datos => console.log(datos)),
      map(datos => datos),
      catchError(this.handleError)
    );
  }
  obtenerTarjeta(id: number): Observable<Tarjeta> {
    throw new Error('Method not implemented.');
  }
  agregarTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    throw new Error('Method not implemented.');
  }
  actualizarTarjeta(tarjeta: Tarjeta): Observable<Tarjeta[]> {
    throw new Error('Method not implemented.');
  }
  eliminarTarjeta(): Observable<Tarjeta[]> {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
    super();
  }

  private handleError(error: any) {
    console.log(error); // registro en el servidor
    return throwError(error);
  }
}
