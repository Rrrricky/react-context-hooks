import React, {createContext, useState} from 'react';

// 1. createContext
export const BookContext = createContext()

// 2. Create Provider and pass it props (from App.js)
const BookContextProvider = ({children}) => {
  // 3. Set state through hook
  const [books] = useState([
    {title: 'Harry Potter', id: 1},
    {title: 'Hunger Games', id: 2},
    {title: 'The LightHouse', id: 3},
  ])
  return (
    // 4. Pass value to the children wrapped (in App.js)
    <BookContext.Provider value={{books}}>
      {children}
    </BookContext.Provider>
  )
};

export default BookContextProvider;
