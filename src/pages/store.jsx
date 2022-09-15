import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Cart from "../components/cart";
import { SelectedContext } from "../context/selecterd";
import { ShoppingCardContext } from "../context/shoppingCardContext";
import { data } from "../data/data";

const Store = () => {
  const [quantity, setQuantity] = useContext(ShoppingCardContext);
  const [selected, setSelected] = useContext(SelectedContext)
  const select = (item) => {
    if(selected.includes(item.id)){
      let res = selected.filter(vl => vl !== item.id)
      setSelected(res)
    }else{
      setSelected([...selected, item.id])
    }
    console.log(quantity);
  }
  return (
    <div style={{ width: "100%" }}>
      <Cart />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 280px)",
          gap: "20px",
          margin: "auto",
          height: '85vh',
          overflow: 'hidden',
        }}
      >
        {data.map((item) => (
          <>
            <div
              style={{
                background: "white",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 3px 10px rgba(0,0,0, 0.1)",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              key={item.id}
            >
              {item.img}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                }}
              >
                <a style={{ fontSize: "20px", color: "black" }}>
                  {item.title.toUpperCase()}
                </a>
                <a style={{ fontSize: "20px", color: "black" }}>
                  {item.price} {"$"}
                </a>
              </div>
              <div>
                {!selected.includes(item.id) ? (
                  <button
                    style={{
                      width: "80%",
                      fontSize: "18px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      padding: "15px 0",
                      borderRadius: "5px",
                      margin: "10px 20px",
                      background: "blue",
                      color: "white",
                    }}
                    onClick={() => {
                      select(item);
                      setQuantity({
                        ...quantity,
                        [item.title]: quantity[item.title] + 1,
                      });
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      style={{
                        width: "50px",
                        fontSize: "20px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        borderRadius: "5px",
                        margin: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                      onClick={() =>
                        setQuantity({
                          ...quantity,
                          [item.title]: quantity[item.title] - 1,
                        })
                      }
                    >
                      -
                    </button>
                    <p style={{ fontSize: "16px", color: "black" }}>
                      {quantity[item.title]}{" "}
                      <span style={{ color: "black" }}>in card</span>
                    </p>
                    <button
                      style={{
                        width: "50px",
                        fontSize: "20px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        borderRadius: "5px",
                        margin: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                      onClick={() =>
                        setQuantity({
                          ...quantity,
                          [item.title]: quantity[item.title] + 1,
                        })
                      }
                    >
                      +
                    </button>
                    <button
                      style={{
                        width: "60px",
                        fontSize: "16px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        borderRadius: "5px",
                        margin: '0 10px',
                        backgroundColor: "blue",
                        color: "white",
                        padding: '0 10px',
                      }}
                      onClick={() => {
                        select(item);
                        setQuantity({ ...quantity, [item.title]: 0 });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Store;
