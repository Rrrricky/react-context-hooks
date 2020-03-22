import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext"

class ThemeToggle extends Component {
  // Use contextType to consume data
  static contextType = ThemeContext
  render() {
    const { toggleTheme } = this.context
    return (
      <button onClick={toggleTheme}>
        Toogle the theme
      </button>
    );
  }
}

export default ThemeToggle;
