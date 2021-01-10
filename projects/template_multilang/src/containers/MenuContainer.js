import {
    Item,
    Fields,
    Select
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

        // > Multilang: To remove it multilang don't needed
        let langs = this.footer(new Select({
            list: [
                new Item({title: "English", value: "EN"}),
                new Item({title: "Русский", value: "RU"}),
            ],
            value: T.code
        }));
        langs.listen("onChange", action => this.selectLanguage(action.target.active().value()), true);
        // < Multilang


        // Main menu
        this.reqGet("/root_menu");
    }
    setData(data) {
        let menu = this.createMenu({list: data.map(item => new Item(item) )});
        this.push( menu );
    }

    // To remove it multilang don't needed
    selectLanguage(lang) {
        let root = this.root();
        root.lang(lang);
        this.root().req().get("/"+lang).then(resp => {
            Object.keys(resp.T).forEach(key => T[key] = resp.T[key]);
            root.app().length(0);
            root.open(MenuContainer.id);
        })
    }
}
MenuContainer.id = "root_menu";
