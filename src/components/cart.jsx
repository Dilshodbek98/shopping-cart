import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartOpentContext } from '../context/cartOpen'
import { SelectedContext } from '../context/selecterd'
import { ShoppingCardContext } from '../context/shoppingCardContext'
import { data } from '../data/data'
import { Cartt, Container } from './cartStyled'
import {FaTimes} from 'react-icons/fa'
function Cart() {
  const [selected, setSelected] = useContext(SelectedContext);
  const [quantity, setQuantity] = useContext(ShoppingCardContext);
  const [isCardOpen, setIsCardOpen] = useContext(CartOpentContext) 
  return (
    <Cartt cart={isCardOpen}>
      <Container>
        <h3>Cart</h3>
        <h3>
          Total price:{" "}
          {Math.round(quantity.book * 10.99 +
            quantity.car * 14000 +
            quantity.banana * 1.05 +
            quantity.laptop * 1199)}{" "}
          $
        </h3>
        <button className='close' onClick={() => setIsCardOpen(!isCardOpen)}><FaTimes size={30}/></button>
        {data.map((item) => {
          if(selected.includes(item.id))
          return (
            <div className="card">
              <div>{item.img}</div>
              <div className="description">
                <p className='title'>{item.title.toUpperCase()}</p>
                <p>
                  Price of one {item.title}: {item.price} {"$"}
                </p>
                <p>
                  Total price: {quantity[item.title]} * {item.price} ={" "}
                  {quantity[item.title] * item.price}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </Cartt>
  );
}

export default Cart