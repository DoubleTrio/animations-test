import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();
export function AppContext({ children }) {
  const [isLightTheme, changeTheme] = useState(true)
  const themeObj = {
    isLightTheme,
    changeTheme: () => {
      changeTheme(!isLightTheme);
    }
  }

  return (
    <ThemeContext.Provider value={themeObj}>
      {children}
    </ThemeContext.Provider>
  )
}


export function withThemeContext(Component) {
	return function contextComponent(props) {
    const theme = useContext(ThemeContext)
		return (
			<Component {...props} theme={theme} />
    );
  }
}