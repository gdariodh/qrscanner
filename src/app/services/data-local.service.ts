import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor() { }

  async guardarRegistro(format: string, content: string){
    const nuevoRegistro = new Registro(format, content);
    // TODO: Tarea 1 -- guardar registro en la memoria del equipo


  }

  abrirRegistro(registro: Registro){
    switch (registro.type) {
      case 'http':
        // TODO: Tarea 2 -- Abrir el registro en el navegador nativo del device
        break;

      case 'geo':
        // Abrir el mapa

        

      default:
        break;
    }
  }
}
