// LO QUE NO SE DEBE HACER
interface ShapeInterface {
  calculateArea();
  calculateVolume();
}

class Square implements ShapeInterface {
  calculateArea(){
      // some logic
  }
  calculateVolume(){
      // some logic
  }  
}

class Cylinder implements ShapeInterface {
  calculateArea(){
      // some logic
  }
  calculateVolume(){
      // some logic
  }    
}


// LO QUE SE DEBE HACER
interface AreaInterface {
  calculateArea();
}

interface VolumeInterface {
  calculateVolume();
}

class Square implements AreaInterface {
  calculateArea(){
      // some logic
  }
}

class Cylinder implements AreaInterface, VolumeInterface {
  calculateArea(){
      // some logic
  }
  calculateVolume(){
      // some logic
  }    
}