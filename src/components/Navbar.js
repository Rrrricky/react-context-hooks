import React from 'react'
import { ThemeContext } from "../contexts/ThemeContext"

class Navbar extends React.Component {
  static contextType = ThemeContext // Use contextType for passing data to this component (go up in the tree to get the first provider)
  render() {
    const {isLightTheme, light, dark} = this.context
    const theme = isLightTheme ? light : dark
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Dev</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
