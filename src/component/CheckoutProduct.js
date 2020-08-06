import React from "react";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{basket},dispatch]=useStateValue()
    console.log(id)
    const removeFromBasket=()=>{
        // remove from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
  return (
    <div className="checkoutProduct">
     <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img
                  className="star__image"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                  alt=""
                />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
