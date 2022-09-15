import React, { createContext, useState } from 'react'

export const CartOpentContext = React.createContext();

function CartOpenProvider({children}) {
   const [isCardOpen, setIsCardOpen] = useState(false) 
  return (
    <CartOpentContext.Provider value={[isCardOpen, setIsCardOpen]}>
      {children}
    </CartOpentContext.Provider>
  );
}

export default CartOpenProvider;