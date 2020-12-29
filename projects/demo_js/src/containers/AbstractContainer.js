import {Container, Menu, Fields, Button} from "pejava.js";


export class AbstractContainer extends Container {

    constructor(data) {
        super(data);
        this._menus = this._root = undefined;

        /* Default button to close container */
        let btn = new Button({label: "", className: "icon icon-remove"});
        let buttons = new Fields({children:[btn]});
        btn.listen("onClick", (a) => {
            this.destroy();
            let prev = this.prev();
            if (!prev) return;
            prev.current();
            prev.reset();
        });
        this.buttons(buttons);
    }

    init(params) {
        if (params.path[0] === '/')
            this.reqGet(params.path);
        this.reqGet('/'+params.path);
    }

    root(v){
        if (v) this._root = v;
        return this._root;
    }

    current() {
        this.root().last(this);
    }

    open(params) {
        this.current();
        this.root().open(params);
    }

    prev() {
        let i = this.root().app().children().indexOf(this);
        if (i > 0) {
            return this.root().app().get(i-1);
        }
        return;
    }
    reset() {
        this._menus && this._menus.forEach( m => m.active(undefined) );
    }
    createMenu(data = {}) {
        return this.addMenu(new Menu(data));
    }

    addMenu(menu) {
        if (!this._menus) this._menus = [];
        this._menus.push(menu);
        menu.listen("onSelect", a => this._nextContainer(a), true);
        return menu;
    }
    _nextContainer(a) {
        this._menus.forEach( m => m !== a.target && m.active(undefined));
        if (!a.target.active() || !a.target.active().value()) return;
        this.open((a.target.active().value()))
    }

    getMenu(v) {
        if (v >= this._menus.length || v < 0) return;
        return this._menus[v];
    }

    reqGet(url) {
        this.root().req().get(url).then(resp => {
            this.setData(resp);
        })
    }
    setData(data) {}
}
AbstractContainer.id = "";
