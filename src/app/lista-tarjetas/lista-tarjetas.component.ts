import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { HttpClient } from '@angular/common/http';
import { HttpClientTarjetaService } from '../services/http-client-tarjeta.service';


@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent implements OnInit {
  tarjetas: Tarjeta[] = [];

  apiUrl = 'api/tarjetas';
  constructor(
    private http: HttpClient,
    private servicioTarjetas: HttpClientTarjetaService) {}

  ngOnInit() {
    this.servicioTarjetas.obtenerTarjetas().subscribe(
      res => {
        console.log('desde servicio', res);
        this.tarjetas = res;
      }
    );
  }
  tareaCompletas(tarjeta) {
    console.log(tarjeta);
    const indice = this.tarjetas.findIndex(t => t === tarjeta);
    this.tarjetas.splice(indice, 1);
  }
}
