import React from 'react';
import Navbar from "./components/Navbar"
import BookList from "./components/BookList"
import ThemeToggle from "./components/ThemeToggle"
import ThemeContextProvider from "./contexts/ThemeContext"
import AuthContextProvider from "./contexts/AuthContext"
import BookContextProvider from "./contexts/BookContext"
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          {/* Link the BookList component to the context */}
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
