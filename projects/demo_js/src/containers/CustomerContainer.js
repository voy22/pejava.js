import {
    Item, Box, EnumContainer, EnumLayout, Input,
    Button, EnumStatus, Radio, Container, Menu
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class CustomerContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[CustomerContainer.id]);
    }

    save() {

    }

    setData(data) {
        let form = new Box({
            className: EnumContainer.PADDING,
        });
        this.push(form);

        form.push(new Input({
            name: "name", /* for http request */
            title: T.customer.name,
            value: data.name,
        }));
        form.push(new Input({
            name: "email", /* for http request */
            title: T.customer.email,
            value: data.email,
            type: "email"
        }));
        form.push(new Radio({
            name: "status",
            title: T.customer.status,
            list: T.customer.statuses.map(i => new Item(i)),
            value: data.status
        }));

        form.push(new Input({
            title: T.customer.registered,
            value: data.registered,
            disabled: true
        }));


        let btn = new Button({
            label: T.profile.save,
            className: EnumStatus.ACCENT
        });
        btn.listen("onClick", a => this.save());

        this.push(new Box({
            className: EnumContainer.CENTER,
            layout: EnumLayout.ELEMENTS_MEDIUM,
            children: [btn]
        }));


        let orders = new Container({
            title: T.order.orders,
            children: [
                this.createMenu({list: data.orders.map( i => new Item(i))})
            ]
        });
        this.push(orders);


    }
}
CustomerContainer.id = "customer";
