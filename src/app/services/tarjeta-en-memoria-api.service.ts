import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tarjeta } from '../tarjeta';

@Injectable()
export class TarjetaEnMemoriaApiService implements InMemoryDbService {
  createDb() {
    const tarjetas: Tarjeta[] = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

    return {tarjetas};
  }

  constructor() { }
}
