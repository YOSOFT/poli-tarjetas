import { Tarea } from './tarea';

export interface Tarjeta {
  id?: number;
  titulo: string;
  color: string;
  completa: boolean;
  tareas?: Tarea[];
}
