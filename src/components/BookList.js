import React from 'react'
import { ThemeContext } from "../contexts/ThemeContext"

class BookList extends React.Component {
  static contextType = ThemeContext // Set this static property to...
  render() {
    const { isLightTheme, light, dark } = this.context // ...get values though this.context
    const theme = isLightTheme ? light : dark
    return (
      <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>The Lighthouse</li>
          <li style={{ background: theme.ui }}>Harry Potter</li>
          <li style={{ background: theme.ui }}>Hunger Games</li>
        </ul>
      </div>
    )
  }
}

export default BookList
