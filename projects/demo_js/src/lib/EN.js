export const T = {
    lang: "en",
    add: "Добавить",
    yes: "Yes",
    root_menu: {
        title: "MenuContainer",
        description: "Shop Name",
        className: "menu-bar",
        icon: "logo"
    },
    profile: {
        title: "ProfileContainer",
        description: "John Connor",
        name: "<p><b>Name</b>: {0}</p>",
        birthday: "<p><b>Birthday</b>: {0}</p>",
        email: "Email",
        skype: "Skype",
        save: "Save",
        personal: "Personal info",
        form: "Form",
    },
    dashboard: {
        title: "DashboardContainer to display",
        description: "Dashboard",
        charts: "Charts"
    },
    shop: {
        title: "ShopContainer",
        description: "Dashboard",
        info: "Quick shop links"
    },
    products: {
        title: "ProductsContainer",
        description: "Products",
    },
    product: {
        form: "Product property",
        title: "ProductContainer",
        description: "Product",
        name: "Name",
        options: "Options",
        stock: "Available on stock",
        orders: "Orders",
        save: "Save",
        price: "Price ($)",
        status: "Status",
        statuses: [
            {title: "available", value: 1},
            {title: "disabled", value: 2}
        ]
    },
    orders: {
        title: "OrdersContainer",
        description: "Orders",
    },
    order: {
        title: "OrderContainer",
        description: "Order",
        price: "Total price",
        date: "Created",
        customer: "Customer",
        products: "Products",
        orders: "Orders",
        orders_desc: "This product appeared in follow orders:",
        reset: "Reset"
    },
    customers: {
        title: "CustomersContainer",
        description: "Customers",
    },
    customer: {
        title: "CustomerContainer",
        description: "Customer",
        name: "Name",
        email: "Email",
        status: "Status",
        registered: "Registered",
        statuses: [
            {title: "Active", value: "1"},
            {title: "Disabled", value: "2"}
        ]
    },
    settings: {
        title: "SettingsContainer",
        description: "Settings",
        info: `<p>
            Settings allow you to setup your environment. You can setup some    
            <a href="open://common">common settings</a> where you can find allowed settings, and 
            <a href="open://notifications">notification settings</a> allow you to define different notifications.
        </p>`,
        permissions: "Permissions"
    },
    common: {
        title: "CommonContainer",
        description: "Common settings",
        time_access: "Time access (From, To)",
        ip: "ip access",
        provide_access: "Provide access to",
        message: "Message for auto response",
        role: "<p>Your role is <b>{0}</b></p>",
        roles: [
            {label: "Admin", className: "ok"},
            {label: "Operator", className: "warn"},
            {label: "Manager", className: "error"},
        ],
        sex: "Your sex",
        sex_opt: [
            {value: 1, title: "Man"},
            {value: 2, title: "Woman"},
            {value: 3, title: "Child"},
            {value: 4, title: "Undefined"},
        ]
    },
    notifications: {
        title: "NotificationsContainer",
        description: "Notifications",
        by_email: "Notify by email",
        each: "Notify each",
        each_min: [
            {title: "30 min", value: "30"},
            {title: "1 hour", value: "60"},
            {title: "1 day", value: "86400"},
        ],
        telegram: "To telegram",
        level_protection: "Level protection",
        level_protection_opt: [
            {title: "High", value: "1"},
            {title: "Medium", value: "2"},
            {title: "Low", value: "3"},
        ]
    },
    people: {
        title: "PeopleContainer",
        description: "People",
    },

};
