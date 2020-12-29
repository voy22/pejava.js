import {
    Item
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class ProductsContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[ProductsContainer.id]);
    }

    setData(data) {
        this.push( this.createMenu({list: data.map( i => new Item(i))}) );
    }
}
ProductsContainer.id = "products";
