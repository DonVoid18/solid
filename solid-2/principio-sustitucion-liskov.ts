class Rectangulo {
  private ancho: number
  private alto: number

  constructor(ancho: number, alto: number) {
    this.ancho = ancho
    this.alto = alto
  }

  public getAncho() {
    return this.ancho
  }

  public setAncho(ancho: number) {
    this.ancho = ancho
  }

  public getAlto() {
    return this.alto
  }

  public setAlto(alto: number) {
    this.alto = alto
  }

  public getArea() {
    return this.ancho * this.alto
  }
}

class Cuadrado extends Rectangulo {
  constructor(talla: number) {
    super(talla, talla)
  }

  override setAncho(ancho: number): void {
    super.setAlto(ancho)
    super.setAncho(ancho)
  }

  override setAlto(alto: number): void {
    super.setAlto(alto)
    super.setAncho(alto)
  }
}

class Test {
  static getAreaTest(rectangulo: Rectangulo) {
    let ancho = rectangulo.getAncho()
    console.log("ancho: " + ancho)
    rectangulo.setAlto(10)
    console.log("area esperada: " + (ancho * 10) + ", tiene " + rectangulo.getArea())
  }

  static main() {
    // let rectangulo = new Rectangulo(10, 5)
    // this.getAreaTest(rectangulo)

    let sq: Rectangulo = new Cuadrado(5)

    this.getAreaTest(sq)


  }
}

Test.main()