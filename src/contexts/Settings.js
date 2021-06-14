import {createContext} from 'react';

const SettingsContext = createContext({
    settings: {
        day: 'senin'
    },

    setSettings: null
});

export default SettingsContext;