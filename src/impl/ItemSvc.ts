//creating node.js service with typescript 
//A service lets you encapsulate related business logic that you can share across multiple projects. As such, your application can use a service to access and manipulate records from your store

//Data Model Interfaces
import { BaseItem, Item } from '../interface/Item';
import { ItemsData } from '../enums/dummyData'
 
class ItemSvc {
    //Service Methods
    public findAll = async (): Promise<Item[]> => { 

        return Object.values(ItemsData)
    }

    static find = async (id: number): Promise<Item> => {

        return ItemsData[id]
    }

    //define a method to create a new item in the store:
    public create = async (newItem: BaseItem): Promise<Item> => {
        const id = new Date().valueOf();

        ItemsData[id] = {
            id, 
            ...newItem,
        }
        return ItemsData[id];
    };

    //add a method to update an existing store item
    public static update = async (id: number, itemUpdate: BaseItem): Promise<Item | null > => {
        const item: any = this.find(id);

        if(!item){
            return null;
        }

        ItemsData[id] = { id, ...itemUpdate };

        return ItemsData[id];
    };

    //define a method to remove an item from the store - - it receives an id value as parameter and uses it to look up an item in the store  and to delete it if found
    public static remove = async (id: number): Promise<null | void> => {
        const item: any = this.find(id);

        if(!item){
            return null;
        }

        delete ItemsData[id];
    }
}

export default ItemSvc