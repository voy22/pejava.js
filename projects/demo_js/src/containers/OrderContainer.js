import {
    Item, Input, Button, Fields, Txt, EnumContainer, Box, Container
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class OrderContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[OrderContainer.id]);
    }
    init(params) {
        //super.init(params);
        this.description(T.order.description+" #"+params.chunks[1]);
        super.init(params);
    }
    setData(data) {
        let form = new Box({
            className: EnumContainer.PADDING
        });
        this.push(form);

        form.push(new Fields({
            title: T.order.price,
            children: [
                new Txt("$"),
                new Input({
                    name: "price", /* for http request */
                    value: data.price,
                    type: "float"
                }),
                new Button(T.order.reset)
            ]
        }))

        form.push(new Input({
            title: T.order.date,
            value: data.date,
            disabled: true
        }));

        let customer = new Container({
            title: T.order.customer,
            children: [
                this.createMenu({
                    list: [new Item(data.customer)],
                })
            ]
        });
        this.push(customer);

        let products = new Container({
            title: T.order.products,
            children: [
                this.createMenu({list: data.products.map( i => new Item(i))})
            ]
        });
        this.push(products);

        //this.push(this.createMenu({list: data.map( i => new Item(i))}));
    }
}
OrderContainer.id = "order";
