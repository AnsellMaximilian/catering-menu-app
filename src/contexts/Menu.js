import { createContext } from "react";

const MenuContext = createContext({
    menu: {
        dates: {
            start: '',
            end: ''
        },
        days: {
            senin: [],
            selasa: [],
            rabu: [],
            kamis: [],
            jumat: [],
        }
    },

    setMenu: null
});

export default MenuContext;