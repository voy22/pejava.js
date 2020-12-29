import {
    EnumContainer, Txt, Container, Items, Item, EnumIconColor
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class SettingsContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[SettingsContainer.id]);
        this.className(EnumContainer.PADDING);
    }


    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
        let info = new Txt(T.settings.info);
        info.listen("onClick", a => {
            if (!a.ref || !a.ref.href) return;
            this.open(a.ref.href.substr(7)) /* cut out 'open://' */
        });
        this.push(info);
        super.init(params);
    }
    setData(data) {
        let props = this.push(new Container({ title: T.settings.permissions }));
        props.push(new Items({list: data.permissions.map( i => new Item(i) )}));
    }
}
SettingsContainer.id = "settings";
