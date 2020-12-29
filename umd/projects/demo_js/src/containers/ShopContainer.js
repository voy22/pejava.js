import {
    Item, Txt, Container, EnumContainer, EnumLayout, Menu
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class ShopContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[ShopContainer.id]);
    }

    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
        //
        this.push(new Txt({
            text: T.shop.info,
            className: EnumContainer.PADDING+' '+EnumContainer.MARGIN
        }));
        this.menu = this.createMenu();
        this.push( this.menu );
        this.reqGet("/shop");
    }
    setData(data) {
        this.menu.list( data.map(i => new Item(i)) );
    }
}

ShopContainer.id = "shop";
