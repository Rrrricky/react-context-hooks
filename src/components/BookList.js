import React from 'react'
import { ThemeContext } from "../contexts/ThemeContext"

class BookList extends React.Component {

  render() {
    return (
      // .Consumer gives access to context
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context // ...get values though this.context
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
      }}</ThemeContext.Consumer>
    )
  }
}

export default BookList
