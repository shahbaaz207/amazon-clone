import React from "react";
import Product from "./Product";
import { products } from "./data";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://i.insider.com/5d545e62cd97844b7d47debc?width=1136&format=jpeg"
        alt=""
      />

      <div className="home__row">
        <Product
          id={products[0].id}
          title={products[0].title}
          price={products[0].price}
          rating={3}
          review={6}
          image={products[0].image}
        />
        <Product
          id={products[1].id}
          title={products[1].title}
          price={products[1].price}
          rating={5}
          review={9}

          image={products[1].image}
        />
      </div>

      <div className="home__row">
        <Product
          id={products[2].id}
          title={products[2].title}
          price={products[2].price}
          rating={4}
          review={10}

          image={products[2].image}
        />

        <Product
          id={products[3].id}
          title={products[3].title}
          price={products[3].price}
          rating={1}
          image={products[3].image}
          review={16}
          
        />

        <Product
          id={products[4].id}
          title={products[4].title}
          price={products[4].price}
          rating={4}
          review={2}

          image={products[4].image}
        />
        <Product
          id={products[4].id}
          title={products[4].title}
          price={products[4].price}
          rating={4}
          review={1}

          image={products[4].image}
        />
      </div>

      <div className="home__row">
        <Product
          id={products[5].id}
          review={88}

          title={products[5].title}
          price={products[5].price}
          rating={4}
          image={products[5].image}
        />

      <Product
          id={products[5].id}
          title={products[5].title}
          price={products[5].price}
          rating={4}
          review={13}

          image={products[5].image}
        />
      </div>
      {/* product */}
    </div>
  );
};

export default Home;
