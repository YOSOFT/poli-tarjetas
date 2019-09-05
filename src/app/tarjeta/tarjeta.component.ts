import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() tarjeta: Tarjeta;
  @Output() tareaCompleta = new EventEmitter<Tarjeta>();
  constructor() { }

  ngOnInit() {
  }
  tareaToogle(evento, tarjeta) {
    console.log(evento);
    if (evento.checked) {
      this.tareaCompleta.emit(tarjeta);
    }
  }
}
