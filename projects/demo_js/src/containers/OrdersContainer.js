import {
    Item, PieChart, Container, EnumContainer, EnumLayout, Menu
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class OrdersContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[OrdersContainer.id]);
    }

    setData(data) {
        this.push(this.createMenu({list: data.map( i => new Item(i))}));
    }
}
OrdersContainer.id = "orders";
