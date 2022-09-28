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

    this.abrirRegistro(nuevoRegistro)


  }

  abrirRegistro(registro: Registro){
    switch (registro.type) {
      case 'http':
        console.log("url:", registro)
        // TODO: Tarea 2 -- Abrir el registro en el navegador nativo del device
        break;

      case 'geo':
        console.log("geo:", registro)
        // Abrir el mapa

        // TODO: Me quede en el minuto 45



      default:
        break;
    }
  }
}
