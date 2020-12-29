import {
    Item, Container, EnumContainer, EnumLayout, Input, Button, Box, Select, Img
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class ProductContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[ProductContainer.id]);
    }

    save() {
        alert(JSON.stringify(this.data()));
    }

    setData(data) {
        let img = new Container({
            layout: EnumLayout.ELEMENTS_MEDIUM,
            className: [EnumContainer.CENTER, EnumContainer.PADDING].join(" ")
        });
        this.push(img);
        img.push(new Img("https://picsum.photos/32/32"));


        let form = new Container({
            title: T.product.form,
            layout: EnumContainer.PADDING
        });
        this.push(form);

        form.push(new Input({
            name: "name", /* for http request */
            title: T.product.name,
            value: data.name,
        }));
        form.push(new Input({
            name: "options", /* for http request */
            title: T.product.options,
            value: data.options,
        }));
        form.push(new Input({
            name: "stock", /* for http request */
            title: T.product.stock,
            value: data.stock,
            type: "int"
        }));
        form.push(new Input({
            name: "price", /* for http request */
            title: T.product.price,
            value: data.price,
            type: "float"
        }));

        form.push(new Select({
            title: T.product.status,
            list: T.product.statuses.map(i => new Item(i)),
            value: data.status
        }));




            let btn = new Button(T.product.save);
        btn.listen("onClick", a => this.save());

        this.push(new Box({
            layout: [
                EnumContainer.PADDING,
                EnumLayout.ELEMENTS_MEDIUM,
                EnumContainer.CENTER
            ].join(" "),
            children: [btn]
        }));


        let orders = this.createMenu({list: data.orders.map( i => new Item(i))});
        this.push(new Container({
            title: T.order.orders,
            description: T.order.orders_desc,
            children: [orders]
        }));

    }
}
ProductContainer.id = "product";
