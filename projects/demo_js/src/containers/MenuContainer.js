import {
    Menu,
    Item,
    MenuComponent,
    Fields
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
        this.buttons(new Fields({children:[]}));

        // footer element
        let footer = this.createMenu({ list: [
            new Item({
                icon: 'square-right mi',
                link: true,
                title: T.profile.title,
                comment: T.profile.description,
                value: "profile"
                //url: "https://picsum.photos/32/32"
            }),
        ]});
        this.footer(footer);

        // Main menu
        this.reqGet("/root_menu");
    }
    setData(data) {
        let menu = this.createMenu({list: data.map(item => new Item(item) )});
        this.push( menu );
    }
}
MenuContainer.id = "root_menu";
