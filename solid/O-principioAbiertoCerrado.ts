class Triangle {
  public base: number
  public height: number

  constructor(base1: number, height1: number) {
    this.base = base1
    this.height = height1
  }
}

class Rectangle {
  public width: number
  public height: number

  constructor(width1: number, height1: number) {
    this.width = width1
    this.height = height1
  }
}

// Array<Rectangle | Triangle> === (Rectangle | Triangle)[]
function computeAreasOfShapes(shapes: (Rectangle | Triangle)[]) {
  return shapes.reduce(
    (computedArea, shape) => {
      if (shape instanceof Rectangle) {
        computedArea += shape.width * shape.height
      } else if (shape instanceof Triangle) {
        computedArea += shape.base * shape.height / 2
      }

      // AQUÍ SE ROMPE EL PRINCIPIO DE ABIERTO/CERRADO
      // if (shape instanceof Circle) {
      //   computedArea += Math.PI * Math.pow(shape.radius, 2)
      // }
      return computedArea
    }, 0
  )
}

// LO QUE SE DEBE HACER
interface ShapeAreaInterface {
  getArea(): number
}

type Shape = (Triangle1 | Rectangle1)[]

class Triangle1 implements ShapeAreaInterface {
  public base: number
  public height: number
  constructor(base: number, height: number) {
    this.base = base
    this.height = height
  }

  public getArea() {
    return this.base * this.height * 0.5
  }
}

class Rectangle1 implements ShapeAreaInterface {
  public width: number
  public height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  public getArea() {
    return this.width * this.height
  }
}

function computeAreasOfShapes1(
  shapes: Shape
) {
  return shapes.reduce(
    (computedArea, shape) => {
      return computedArea + shape.getArea()
    },
    0
  )
}

// instanciando objetos
const t1 = new Triangle1(10, 5)
const r1 = new Rectangle1(10, 5)

// calculando áreas
const area = computeAreasOfShapes1([t1, r1])

console.log(area)