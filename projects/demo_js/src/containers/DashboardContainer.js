import {
    Item, PieChart, Container, EnumContainer, EnumLayout, Menu
} from 'pejava.js';

import {T} from "../lib/EN";
import {AbstractContainer} from "./AbstractContainer";

export class DashboardContainer extends AbstractContainer {
    constructor() {
        // init container: title, description, icon, ect...
        super(T[DashboardContainer.id]);
    }

    setData(data) {

        // Charts
        let pie_charts = data.charts.map( l => new PieChart({ list: l.list.map( d => {
            return new Item(Object.assign({}, d, {num: d.num/100 * 360}));
        })}));
        let charts = new Container({
            title: T.dashboard.charts,
            children: pie_charts,
            layout: EnumLayout.GRID_MEDIUM,
            className: EnumContainer.PADDING
        });
        this.push(charts);


        // Menu
        let menu = this.createMenu({list: data.ref.map( i => new Item(i) ) });
        let references = new Container({
            title: T.dashboard.charts,
            children: [menu],
        });
        this.push(references);
    }
}
DashboardContainer.id = "dashboard";
