import React, { useContext } from 'react';
import { ThemeContext } from '../types';

function withThemeContext(Component) {
	return function contextComponent(props) {
    const theme = useContext(ThemeContext)
		return (
			<Component {...props} theme={theme} />
    );
  }
}

export default withThemeContext;