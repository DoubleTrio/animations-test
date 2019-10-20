import { createContext } from 'react';

export const ThemeContext = createContext({
    isLightTheme: true,
    changeTheme: () => {},
    palette: {},
});