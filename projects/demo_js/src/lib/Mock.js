export const Mock = {

    '/root_menu': [
        {icon: 'home bold margin', title: "Dashboard", value: "dashboard"},
        {icon: 'group bold margin', title: "Shop", value: "shop"},
        {icon: 'space', title: "Products", value: "products"},
        {icon: 'space', title: "Orders", value: "orders"},
        {icon: 'space', title: "Customers", value: "customers"},
        {icon: 'gear bold margin', title: "Settings", value: "settings"},
        {icon: 'space', title: "Common", value: "common"},
        {icon: 'space', title: "Notifications", value: "notifications"},
    ],
    '/profile': {
        name: "John Connor",
        birthday: "28 Feb 1985",
        email: "john.connor@sky.net",
        skype: "JConnor85"
    },
    '/dashboard': {
        charts: [
            {
                name: "New users (per month)",
                list: [
                    {num: 5, title: "5%", color: "color-error"},
                    {num: 95, title: "old users 95%"}
                ]
            },
            {
                name: "Traffic",
                list: [
                    {num: 35, title: "youtube 35%", color: "color-ok"},
                    {num: 28, title: "telegram 28%", color: "color-accent"},
                    {num: 37, title: "other 37%", color: "color-error"},
                ]
            },
            {
                name: "Orders (1243)",
                list: [
                    {num: 75, title: "paid 75%", color: "color-ok"},
                    {num: 5, title: "returns 5%", color: "color-error"},
                    {num: 20, title: "process 20%", color: "color-accent"},
                ],
            }
        ],
        ref: [
            {
                icon: 'gear',
                title: "Customers",
                comment: "total 100, new 5",
                link: true,
                value: 'customers'
            },
            {
                icon: 'gear',
                title: "Orders",
                comment: "total 1243, new 5",
                link: true,
                value: 'orders'
            },
        ]
    },
    '/shop': [
        {icon: 'gear', title: "Products", value: "products", label: "5", link: true},
        {icon: 'gear', title: "Orders", value: "orders", label: "3", link: true},
        {icon: 'gear', title: "Customers", value: "customers", label: "2", link: true},
    ],
    '/products': [
        {title: "Product Good", value: "product/100", comment:"options: 44, 15, 33", label: "$9", link: true},
        {title: "Big product", value: "product/101", comment:"options: 12, 9", label: "$10", link: true},
        {title: "Gift", value: "product/102", comment:"options: 55, 48", label: "$11", link: true},
    ],
    '/product/100': {
        name: "Product Good",
        options: "44, 15, 33",
        stock: "23",
        price: "9",
        orders: [
            {title: "#301", value: "order/301", comment:"2020.12.01", label:"$20.55", link: true},
            {title: "#305", value: "order/305", comment:"2020.12.22", label:"$178", link: true},
            {title: "#306", value: "order/306", comment:"2020.12.30", label:"$95", link: true},
        ]
    },
    '/product/101': {
        name: "Big product",
        options: "12, 9",
        stock: "98",
        price: "10",
        orders: [
            {title: "#304", value: "order/304", comment:"2020.12.01", label:"$20.55", link: true},
            {title: "#305", value: "order/305", comment:"2020.12.22", label:"$178", link: true},
        ]
    },
    '/product/102': {
        name: "Big product",
        options: "12, 9",
        stock: "98",
        price: "11",
        orders: [
            {title: "#304", value: "order/304", comment:"2020.12.01", label:"$20.55", link: true},
            {title: "#306", value: "order/306", comment:"2020.12.30", label:"$95", link: true},
        ]
    },
    '/orders': [
        {title: "#301", value: "order/301", comment:"2020.11.29", label:"$17.05", link: true},
        {title: "#304", value: "order/304", comment:"2020.12.01", label:"$20.55", link: true},
        {title: "#305", value: "order/305", comment:"2020.12.22", label:"$178", link: true},
        {title: "#306", value: "order/306", comment:"2020.12.30", label:"$95", link: true},
    ],
    '/order/301': {
        date: "2020.11.29",
        price: "17.05",
        status: 1,
        products: [
            {title: "Product Good", value: "product/100", comment:"options: 44, 15, 33", label: "32 ($8x4)", link: true},
        ],
        customer: {
            title: "Will Smith",
            value: "customer/1",
            link: true
        },

    },
    '/order/304': {
        date: "2020.12.01",
        price: "20.55",
        status: 2,
        products: [
            {title: "Big product", value: "product/101", comment:"options: 12, 9", label: "$3", link: true},
            {title: "Gift", value: "product/102", comment:"options: 55, 48", label: "$2", link: true},
        ],
        customer: {
            title: "Will Smith",
            value: "customer/1",
            link: true
        },
    },
    '/order/305': {
        date: "2020.12.22",
        price: "178",
        status: 1,
        products: [
            {title: "Product Good", value: "product/100", comment:"options: 44, 15, 33", label: "$5", link: true},
            {title: "Big product", value: "product/101", comment:"options: 12, 9", label: "$15 ($5x3)", link: true},
        ],
        customer: {
            title: "Will Smith",
            value: "customer/1",
            link: true
        },
    },
    '/order/306': {
        date: "2020.12.30",
        price: "95",
        status: 1,
        products: [
            {title: "Product Good", value: "product/100", comment:"options: 44, 15, 33", label: "$10", link: true},
            {title: "Gift", value: "product/102", comment:"options: 55, 48", label: "$14 ($7x2)", link: true},
        ],
        customer: {
            title: "Bill Murray",
            value: "customer/2",
            link: true
        },
    },
    '/customers': [
        {title: "Will Smith", value: "customer/1", comment:"confirmed • online", label:"3 orders", link: true},
        {title: "Bill Murray", value: "customer/2", comment:"guest", label:"1 order", link: true},
    ],
    '/customer/1': {
        name: "Will Smith",
        email: "Will.Smith@gmail.com",
        status: "1",
        registered: "2020.02.12",
        orders: [
            {title: "#301", value: "order/301", comment:"2020.11.29", label:"$17.05", link: true},
            {title: "#304", value: "order/304", comment:"2020.12.01", label:"$20.55", link: true},
            {title: "#305", value: "order/305", comment:"2020.12.22", label:"$178", link: true},
        ]
    },
    '/customer/2': {
        name: "Bill Murray",
        email: "Bill.Murray@gmail.com",
        status: "2",
        registered: "2019.11.04",
        orders: [
            {title: "#306", value: "order/306", comment:"2020.12.30", label:"$95", link: true},
        ]
    },

    '/settings': {
        permissions: [
            {title: "Customer management", comment: "Create, Delete, Edit"},
            {title: "Order management", comment: "Cancel only"},
            {title: "Products management", comment: "no permissions"},
            {title: "Grant users", comment: "Add, Password reset"},
        ]
    },

    '/common': {
        from: "8",
        to: "17",
        ip: "192.180.1.10",
        provide_access: "Mickey Rourke, Woody Allen, John Joseph Travolta, Thomas Jeffrey Hanks, Tom Cruise, Thomas Hiddlesto",
        message: "Unfortunately, I'm out of the office at this moment. I'll send you an answer as soon as I back.",
        sex: 2,
    },

    '/notifications': {
        telegram: "@pejava"
    },
    '/people': [
        "Tom Hardy",
        "Mickey Rourke",
        "Woody Allen",
        "Rosamund Pike",
        "Alain Delon",
        "John Joseph Travolta",
        "Kelly Ann McGillis",
        "Sylvester Stallone",
        "Thomas Jeffrey Hanks",
        "Tom Cruise",
        "Tom Holland",
        "Thomas Hiddlesto",
        "Tommy Lee Jones"
    ],

};
