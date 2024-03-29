export class Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;

  constructor(id: number, name: string, category: string, price: number, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
