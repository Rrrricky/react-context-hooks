// 1. Import createContext func
import React, { createContext } from 'react'

// 2. Export it within a const
export const ThemeContext = createContext()

class ThemeContextProvider extends React.Component {
  // 3. Set all the share data
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee',
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555',
    }
  }
  render() {
    return (
      // 4. Use Provider tag + specify data provided to components it wraps
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;