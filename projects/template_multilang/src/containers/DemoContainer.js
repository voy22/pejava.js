import {Txt, EnumContainer} from 'pejava.js';
import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class DemoContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[DemoContainer.id]);
        this.className(EnumContainer.PADDING);
    }

    init(params) {
        this.push(new Txt({
            html: T.demo.html,
            placeholder: [params.path]
        }))
    }
}
DemoContainer.id = "demo";
