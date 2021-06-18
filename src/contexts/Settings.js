import {createContext} from 'react';

const SettingsContext = createContext({
    settings: {
        day: 'senin',
        pageLimit: 3
    },

    setSettings: null
});

export default SettingsContext;