import React from 'react';
import Product from '../components/Product';

const products = [
  {
    name: "Hat",
    price: "$20"
  },
  {
    name: "Book",
    price: "$10"
  },
  {
    name: "Hat",
    price: "$20"
  },
  {
    name: "Book",
    price: "$10"
  },
  {
    name: "Hat",
    price: "$20"
  },
  {
    name: "Book",
    price: "$10"
  }
];

const Home = () => {
  return (
    <div>
      <div className='Home'>
        Home page
      </div>
      {
        products.map((product) => (
          <Product name={product.name} price={product.price}/>
        ))
      }
    </div>
  );
}

export default Home;