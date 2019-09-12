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

  textoTarea: string;

  constructor() { }

  ngOnInit() {
  }
  tareaToogle(evento, indice) {
    // console.log(indice);
    this.tarjeta.tareas[indice].completa = evento.checked;
    const completa = this.tarjeta.tareas.some(t => !t.completa);
    if (!completa) {
      // console.log('tareas completas');
      this.tareaCompleta.emit(this.tarjeta);
    }
  }

  agregarTarea(tarjeta) {
    this.tarjeta.tareas.push({ texto: this.textoTarea, completa: false});
    this.textoTarea = null;
  }
}
