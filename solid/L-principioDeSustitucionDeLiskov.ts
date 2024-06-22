abstract class Shape {
  public width: number
  public height: number
  

  
  public setWidth(width: number) {
    this.width = width
  }
  public setHeight(height: number) {
    this.height = height
  }

  public getArea() {
    return this.width * this.height
  }
}

class Rectangle extends Shape{
  override getArea() {
    console.log(this.width, this.height)
    return this.width * this.height
  }
}

class Square extends Shape {
  override getArea() {
    return this.width * this.width
  }
}

let rectangle = new Rectangle()
rectangle.setWidth(5)
rectangle.setHeight(10)
console.log(rectangle.getArea())

let square = new Square()
square.setWidth(5)
square.setHeight(10)

console.log(square.getArea())