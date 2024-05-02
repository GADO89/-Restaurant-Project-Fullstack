export class Order {

  id: number;
  name:string;
  data_Create:Date;
  data_Update:Date;
  description:string;
  img:string;
  price:number;


  constructor(id: number, name: string, data_Create: Date, data_Update: Date, description: string, img: string, price: number) {
    this.id = id;
    this.name = name;
    this.data_Create = data_Create;
    this.data_Update = data_Update;
    this.description = description;
    this.img = img;
    this.price = price;
  }
}
