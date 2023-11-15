import { Category } from "./Category"

export class Product{
    name: string;
    stock: number;
    price: number;
    active: boolean;
    date_added: Date; //cambio de Date a String (prueba)
    category: Category;
    date_addedFormated: string; //añade

}