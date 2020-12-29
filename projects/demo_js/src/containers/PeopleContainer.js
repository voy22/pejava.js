import {
    CheckBox, EnumContainer
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class PeopleContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[PeopleContainer.id]);
        this.className(EnumContainer.PADDING);
        this.listen("onClick", () => this._setupInput(), true);
        this.list = [];
    }

    _setupInput() {
        let values = this.prev().people().text().split(",").map(v => v.trim());
        let lib = values.reduce((o, v) => {o[v]=1; return o}, {});

        this.list.forEach( i => {
            if (i.value() && !lib[i.placeholder()]) {
                // add
                values.push(i.placeholder())
            } else if (lib[i.placeholder()] && !i.value()) {
                // remove
                values = values.filter(v => v != i.placeholder())
            }
        });
        this.prev().people().text(values.join(", "));
    }
    /*
    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
    }
    */

    setData(data) {
        let values = this.prev().people().text().split(",").map(v => v.trim());
        let lib = values.reduce((o, v) => {o[v]=1; return o}, {});

        this.list = data.map(i => new CheckBox({
            placeholder: i,
            value: i,
            checked: !!lib[i]
        }));
        this.children(this.list);
    }
}
PeopleContainer.id = "people";
