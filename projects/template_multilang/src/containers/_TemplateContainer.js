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
        super.init(params); // for call this.reqGet((params.path[0] !== '/' && '/')+params.path);
    }
    */

    setData(data) { // for ajax response
    }
}
_Container.id = "_TemplateContainer";
