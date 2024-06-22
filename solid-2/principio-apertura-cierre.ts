/*
  Modificación significa cambiar el código
  de una clase existente y extensión
  significa agregar una nueva funcionalidad.
  
  Deberíamos poder agregar nuevas funciones
  sin tocar el código existente para la clase. 
*/
class Factura {
  private persistencia: FacturaPersistencia

  constructor(persistencia: FacturaPersistencia) {
    this.persistencia = persistencia
  }

  guardar() {
    this.persistencia.guardar()
  }

}

interface FacturaPersistencia {
  guardar(): void
}

class BaseDeDatosPersistencia implements FacturaPersistencia {
  guardar() {
    console.log('Guardando factura en la base de datos')
  }
}

class ArchivoPersistencia implements FacturaPersistencia {
  guardar() {
    console.log('Guardando factura en un archivo')
  }
}


const factura = new Factura(new ArchivoPersistencia())
factura.guardar()