import {
    Item,
    Fields,
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class MenuContainer extends AbstractContainer {
    constructor() {
        // Set "title" and "description"
        super(T[MenuContainer.id]);
    }

    init(params) {
        // To remove button "Close"
        this.buttons( new Fields({children:[]}) );

        // Main menu
        this.reqGet("/root_menu");
    }
    setData(data) {
        let menu = this.createMenu({list: data.map(item => new Item(item) )});
        this.push( menu );
    }
}
MenuContainer.id = "root_menu";
