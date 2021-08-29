import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartStorage = ({children}) => {

  const storedValueAsNumber = Number(localStorage.getItem("numCartProd"))
  const [cartNumber, setCartNumber] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  )


  useEffect(() => {
    localStorage.setItem("numCartProd", String(cartNumber))
  }, [cartNumber])

  return (
  <CartContext.Provider value={{cartNumber,setCartNumber}}>
    {children}
  </CartContext.Provider>
  )
}

