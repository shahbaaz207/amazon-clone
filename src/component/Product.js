import React from "react";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating ,review}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add to item
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // if a key and value is same just pass a id,title
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>Review {review}</p>
        <div className="product__rating">
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
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
