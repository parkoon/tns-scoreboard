import React, { createContext, useState, useContext, useEffect } from 'react';
import { THEME_COLOR } from '../constants/theme';
import { ThemeType } from '../interface/theme';

type themeContextType = {
    theme: ThemeType;
    setTheme: (value: ThemeType) => void;
    nameColor: string;
    setNameColor: (value: string) => void;
};
export const ThemeContext = createContext<themeContextType | undefined>(undefined);

const { Provider } = ThemeContext;

type ThemeProviderType = {
    children: React.ReactNode;
};
function ThemeProvider({ children }: ThemeProviderType) {
    const [theme, setTheme] = useState<ThemeType>('clay');
    const [nameColor, setNameColor] = useState('#9696ff');

    // useEffect(() => {
    //     console.log('theme is changed', theme, THEME_COLOR[theme]);
    // }, [theme]);

    return <Provider value={{ theme, setTheme, nameColor, setNameColor }}>{children}</Provider>;
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
