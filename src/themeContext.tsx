import React from 'react';  

export const ThemeContext = React.createContext({
    theme: 'dark',
    toggleTheme: (prevTheme: string) => {},
    buttonLabel: 'Switch to Light Theme',
})