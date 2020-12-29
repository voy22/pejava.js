import {
    Fields, EnumContainer, Item, CheckBox, Select, Input, Radio, EnumLayout
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class NotificationsContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[NotificationsContainer.id]);
        this.className(EnumContainer.PADDING);
    }

    /*
    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
    }
    */

    setData(data) {
        this.push(new Fields({
            title: "Multi-fields",
            className: 'table',
            children: [
                new CheckBox({
                    title: T.notifications.by_email,
                    placeholder: T.yes
                }),
                new Select({
                    name: "each",
                    title: T.notifications.each,
                    list: T.notifications.each_min.map(i => new Item(i)),
                }),
                new Input({
                    name: "telegram",
                    title: T.notifications.telegram,
                    value: data.telegram
                }),
                new Radio({
                    title: T.notifications.level_protection,
                    name: "level",
                    layout: EnumLayout.GRID_COLUMN,
                    list: T.notifications.level_protection_opt.map(i => new Item(i)),
                    value: data.sex,
                })
            ]
        }),)
    }
}
NotificationsContainer.id = "notifications";
