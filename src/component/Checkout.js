import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotla from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout-left">

      <img
        className="checkout_ad"
        src="https://www.operationroi.com/wp-content/uploads/2017/08/amazon-sponsored-products.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h1>Your Shopping Basket is empty</h1>
          <p>
            You have no item in your basket.To must one or more items,Click "Add
            to basketinto the item"
          </p>
        </div>
      ) : (
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>

          {/* list of product */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
    {basket.length>0&&(
    <div className="checkout-right">
        <Subtotla/>
    </div>
        
    )}
    </div>
  );
};

export default Checkout;
