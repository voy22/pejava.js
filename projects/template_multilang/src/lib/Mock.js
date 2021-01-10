import * as EN from './EN';
import * as RU from './RU';

export const Mock = {
    '/EN/root_menu': [
        {icon: 'home bold margin', title: "Demo item 1", value: "demo/one"},
        {icon: 'gear bold margin', title: "Demo item 2", value: "demo/two"},
    ],
    '/RU/root_menu': [
        {icon: 'home bold margin', title: "Демо элемент 1", value: "demo/one"},
        {icon: 'gear bold margin', title: "Демо элемент 2", value: "demo/two"},
    ],
    '/EN': {T: Object.assign({}, EN.T)},
    '/RU': {T: Object.assign({}, RU.T)},
};
