// LO QUE NO SE DEBE HACER
interface Order {
  name: string
}


// class OrderService {
//   database: MySQLDatabase;

//   public create(order: Order): void {
//     this.database.create(order)
//   }

//   public update(order: Order): void {
//     this.database.update
//   }
// }


// class MySQLDatabase {
//   public create(order: Order) {
//     // create and insert to database
//   }

//   public update(order: Order) {
//     // update database
//   }
// }

// LO QUE SE DEBE HACER
interface Database {
  create(order: Order): void
  update(order: Order): void
}

class OrderService {
  database: Database

  public create(order: Order): void {
    this.database.create(order)
  }

  public update(order: Order): void {
    this.database.update(order)
  }
}

class MySQLDatabase implements Database {
  public create(order: Order) {
    // create and insert to database
    console.log("guardando")
  }

  public update(order: Order) {
    // update database
    console.log("actualizando")
  }
}

class PostgresDatabase implements Database {
  public create(order: Order) {
    // create and insert to database
    console.log("guardando eb postgres")
  }

  public update(order: Order) {
    // update database
    console.log("actualizando en postgres")
  }
}

let orderService = new OrderService()
orderService.database = new PostgresDatabase()
orderService.update({ name: "order1" })