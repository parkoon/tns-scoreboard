import React, { createContext, useState, useContext, useEffect } from 'react';
import { THEME_COLOR } from '../constants/theme';
import { ThemeType } from '../interface/theme';

type themeContextType = {
    theme: ThemeType;
    setTheme: (value: ThemeType) => void;
};
export const ThemeContext = createContext<themeContextType | undefined>(undefined);

const { Provider } = ThemeContext;

type ThemeProviderType = {
    children: React.ReactNode;
};
function ThemeProvider({ children }: ThemeProviderType) {
    const [theme, setTheme] = useState<ThemeType>('clay');

    useEffect(() => {
        console.log('theme is changed', theme, THEME_COLOR[theme]);
    }, [theme]);

    return <Provider value={{ theme, setTheme }}>{children}</Provider>;
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
