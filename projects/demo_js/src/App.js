import {BootComponent, Req} from "pejava.js";
import {Mock} from "./lib/Mock";
import {MenuContainer} from "./containers/MenuContainer";
import {ProfileContainer} from "./containers/ProfileContainer";
import {DashboardContainer} from "./containers/DashboardContainer";
import {ShopContainer} from "./containers/ShopContainer";
import {ProductsContainer} from "./containers/ProductsContainer";
import {ProductContainer} from "./containers/ProductContainer";
import {OrdersContainer} from "./containers/OrdersContainer";
import {OrderContainer} from "./containers/OrderContainer";
import {CustomersContainer} from "./containers/CustomersContainer";
import {CustomerContainer} from "./containers/CustomerContainer";
import {SettingsContainer} from "./containers/SettingsContainer";
import {CommonContainer} from "./containers/CommonContainer";
import {NotificationsContainer} from "./containers/NotificationsContainer";
import {PeopleContainer} from "./containers/PeopleContainer";

export class App extends BootComponent {
    constructor(arg) {
        super(arg);
        this._app = this.menu = undefined;
    }

    onLoad(app) {
        this.app(app);
        this.initRegister();
        this.initServices(app);
        this.initContainers();

        // TODO - only if dev mode
        this.req().isMock(true);
        this.req().mock(Mock);
        this.open("root_menu");
    }

    initContainers() {
        this.registerContainer(
            MenuContainer,
            ProfileContainer,
            DashboardContainer,
            ShopContainer,
            ProductsContainer,
            ProductContainer,
            OrdersContainer,
            OrderContainer,
            CustomersContainer,
            CustomerContainer,
            SettingsContainer,
            CommonContainer,
            NotificationsContainer,
            PeopleContainer
        );
    }

    registerContainer(...containerClass) {
        containerClass.forEach(c => {
            if (!c.id) {
                throw new Error(`Container ${c.name} doesn't contains id`);
            }
            App.containers[c.id] = c;
        });
    }

    app(v) {
        if (!!v) this._app = v;
        return this._app;
    }
    set(c1, c2) {
        this._app.last(c1);
        this._app.push(c2);
    }
    last(c) {
        this._app.last(c);
    }
    next(c) {
        this._app.last(c);
    }
    push(c) {
        this._app.push(c);
    }
    pop() {
        return this._app.pop();
    }
    req() {
        return this._app.service("req");
    }
    open(v) {
        if (!v) return;
        let chunks;
        if(typeof v === "string") {
            chunks= v.split("/");
            v = {path: v, chunks: chunks};
        } else {
            if (!v.path) return;
            chunks = v.path.split("/");
            v['chunks'] = chunks;
        }
        let id = chunks[0];
        if (!App.containers[id]) {
            throw new Error("Can't find container "+id);
        }

        let container = new App.containers[id]();
        container.root(this);
        container.init(v);
        this.push(container);
    }
}
App.containers = {};

