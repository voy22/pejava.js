import {
    Item, PieChart, Container, EnumContainer, EnumLayout, Menu
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class _Container extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[_Container.id]);
        // this.className(EnumContainer.PADDING);
    }

    /*
    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
    }
    */

    setData(data) {
    }
}
_Container.id = "_TemplateContainer";
