import { createContext } from "react";

const MenuContext = createContext({
    menu: {
        menuThumbnail: '',
        backgroundImage: '',
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