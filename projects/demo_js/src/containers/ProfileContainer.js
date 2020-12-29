import {
    Item, Txt, EnumContainer, Button, Input, Container, Preloader, Box
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class ProfileContainer extends AbstractContainer {
    constructor() {

        // init container: title, description, icon, ect...
        super(T[ProfileContainer.id]);

        // Padding on container
        this.className(EnumContainer.PADDING);

        // Button save
        let btn = new Button({label: "", className: "icon icon-ok"});
        btn.listen("onClick", a => this.save());
        this.buttons().children().unshift(btn);
        //this.buttons(this.buttons());

        //this.buttons([...this.buttons().children(), btn]);
        this.footer(new Button(T.profile.save))
            .listen("onClick", a => this.save());
    }

    save() {
        const cont = new Box({ title: "Popup: preloader" });
        let btn_close = new Button("Close popup");

        let txt_data = new Txt(this.data().toString());

        cont.push(new Preloader());
        //cont.push(new Txt(this.form().toString()));
        cont.push(new Txt(JSON.stringify(this.data(), 2)));

        cont.push(btn_close);
        this.popup(cont, true);

        btn_close.listen("onClick", action => {
            this.popup(undefined);
        });

    }

    setData(data) {
        //  Set header description
        this.description(data.name);


        let personal = new Container({
            title: T.profile.personal,
        });
        this.push(personal);


        personal.push(new Txt({
            html: T.profile.name,
            placeholder: [data.name]
        }));

        personal.push(new Txt({
            html: T.profile.birthday,
            placeholder: [data.birthday]
        }));

        let form = new Container({
            title: T.profile.form,
        });
        this.push(form);

        form.push(new Input({
            name: "email", /* for http request */
            title: T.profile.email,
            value: data.email,
            type: "email"
        }));
        form.push(new Input({
            name: "skype", /* for http request */
            title: T.profile.skype,
            value: data.skype,
        }));

        let btn = this.push(new Button(T.profile.save));
        btn.listen("onClick", a => this.save());
    }
}
ProfileContainer.id = "profile";
