import React, {useState} from 'react'

export const ShoppingCardContext = React.createContext()

function ShoppingCardProvider({children}) {
  const [quantity, setQuantity] = useState({
    book: 0,
    car: 0,
    banana: 0,
    laptop: 0,
  })
  return (
    <ShoppingCardContext.Provider value={[quantity, setQuantity]}>
      {children}
    </ShoppingCardContext.Provider>
  );
}

export default ShoppingCardProvider