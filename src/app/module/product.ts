export class Product {
    _id: string;
    name: string;
    price: number;
  
    constructor(_id: string, name: string, price: number) {
      this._id = _id;
      this.name = name;
      this.price = price;
    }
  }
  