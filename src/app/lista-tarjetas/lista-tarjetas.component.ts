import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent implements OnInit {
  tarjetas: Tarjeta[] = [
    {
      titulo: 'Diseño',
      completa: false,
      color: '#f8e32a',
      tareas: [
        { texto: 'analisis de requerimientos', completa: false },
        { texto: 'diseño', completa: false },
        { texto: 'implementación prototipo', completa: false },
        { texto: 'pruebas unitarias', completa: false }
      ]
    },
    {
      titulo: 'Implementación',
      completa: false,
      color: '#f8dd2a',
      tareas: [
        { texto: 'analisis de requerimientos', completa: false },
        { texto: 'diseño', completa: false },
        { texto: 'implementación prototipo', completa: false },
        { texto: 'pruebas unitarias', completa: false }
      ]
    },
    {
      titulo: 'Pruebas unitarias',
      completa: false,
      color: '#f8aa22',
      tareas: [
        { texto: 'analisis de requerimientos', completa: true },
        { texto: 'diseño', completa: false },
        { texto: 'implementación prototipo', completa: false },
        { texto: 'pruebas unitarias', completa: false }
      ]
    },
    {
      titulo: 'Producción',
      completa: false,
      color: '#f8cccc',
      tareas: [
        { texto: 'analisis de requerimientos', completa: false },
        { texto: 'diseño', completa: false },
        { texto: 'implementación prototipo', completa: true },
        { texto: 'pruebas unitarias', completa: false }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
  tareaCompletas($evento) {
    console.log($evento);
  }
}
