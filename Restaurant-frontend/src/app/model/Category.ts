export class Category {

  id: number;
  name:string;
  logo:string;
  data_Create:Date;
  data_Update:Date;


  constructor(id: number, name: string, logo: string, data_Create: Date, data_Update: Date) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.data_Create = data_Create;
    this.data_Update = data_Update;
  }
}
