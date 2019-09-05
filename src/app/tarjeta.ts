import { Tarea } from './tarea';

export interface Tarjeta {
  titulo: string;
  color: string;
  completa: boolean;
  tareas?: Tarea[];
}
