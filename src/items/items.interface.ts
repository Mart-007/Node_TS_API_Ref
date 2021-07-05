//create a file to hold the definition of an Items type, a bundle of elements of type Item 
import { Item } from "./item.interface";

export interface Items {
    [key: number] : Item;
}