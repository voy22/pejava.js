import {
    Item, EnumContainer, Select, Items, Fields,
    Input, Txt, Button, Textarea, Radio, EnumLayout
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class CommonContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[CommonContainer.id]);
        this.className(EnumContainer.PADDING);
        this._assess_to = new Txt();
    }

    /*
    init(params) {
        //super.init(params);
        //this.reqGet("/root_menu");
    }
    */
    _getHours() {
        let list = [];
        for(let i = 0; i <= 24; i++) {
            list.push(new Item({title: i+":00", value: i.toString() }))
        }
        return list;
    }
    _setTimeAccess() {
        let from = this.from.value();
        let to = this.to.value();
        for(let i = 0; i <= 24; i++) {
            this.from.get(i).disabled(i >= to);
            this.to.get(i).disabled(i <= from);
        }
    }
    people() {
        return this._assess_to;
    }
    setData(data) {

        /* SELECT DROPBOX FROM-TO */
        this.from = new Select({list: this._getHours(), value: (data.from || 0) });
        this.to = new Select({list: this._getHours(), value: (data.to || 24)});
        this.from.listen("onChange", () => this._setTimeAccess(), true);
        this.to.listen("onChange", () => this._setTimeAccess(), true);
        this._setTimeAccess();
        this.push(new Fields({
            title: T.common.time_access,
            children: [this.from, this.to]
        }));

        /* INPUT */
        this.push(new Input({
            name: "ip", /* for http request */
            title: T.common.ip,
            value: data.ip,
            placeholder: "255.2555.255.255"
        }));

        /* MULTI-SELECT */
        this._assess_to.text(data.provide_access);
        let btn = new Button("...");
        btn.listen("onClick", ()=> this.open("people"));
        this.push(new Fields({
            title: T.common.provide_access,
            children: [
                this._assess_to,
                btn
            ]
        }));

        /* TEXTAREA - MESSAGE */
        this.push(new Textarea({
            name: "messsage",
            title: T.common.message,
            value: data.message,
        }));

        /* ROLE */
        let role = this.push(new Txt({
            html: T.common.role,
            placeholder: [T.common.roles[0].label]
        }));
        let roles = this.push(new Fields({
            children: T.common.roles.map(i => new Button(i))
        }));
        roles.children()[0].disabled(true);
        roles.listen("onClick", a => {
            let btn = a.target.children().find(i => i._key == a.ref.id);
            if (!btn) return;
            a.target.children().forEach(i => i.disabled(i === btn));
            role.html(T.common.role, [btn.label()]);
        });


        /* Radio*/
        this.push(new Radio({
            title: T.common.sex,
            name: "sex",
            //disabled: true,
            layout: EnumLayout.GRID_COLUMN,
            list: T.common.sex_opt.map(i => new Item(i)),
            value: data.sex,
        }));

    }
}
CommonContainer.id = "common";
