import React from 'react';
import Product from '../components/Product';
import {Grid, Row, Col} from 'react-bootstrap';

const products = [
  {
    name: "Hat",
    price: "$20",
    imageSrc: "http://www.hat-gallery.co.uk/website_images/collectie_1406_medium.jpg"
  },
  {
    name: "Book",
    price: "$10",
    imageSrc: "https://assets.houseind.com/app/public/spree/products/520/large_mobile/alexander_girard_book_main.jpg?1434318287"
  },
  {
    name: "Shoe",
    price: "$50",
    imageSrc: "https://5.imimg.com/data5/DR/RK/GLADMIN-16301067/canvas-shoe-navy-blue-250x250.jpg"
  },
  {
    name: "Belt",
    price: "$12",
    imageSrc: "http://rukmini1.flixcart.com/image/300/200/belt/7/5/m/extra-large-b0339lbr01x-fastrack-belt-original-imadaqznqpzjsn9s.jpeg?q=90"
  },
  {
    name: "Cat",
    price: "$1000",
    imageSrc: "https://media4.giphy.com/media/NvcAPYyz1307S/giphy.gif"
  },
  {
    name: "Apple",
    price: "$1",
    imageSrc: "http://www.zath.co.uk/wp-content/uploads/2009/03/apple-logo-silver-242x200.jpg"
  }
];

const Home = () => {
  return (
    <div>
      <div className='Home'>
        <h1>Our Products</h1>
      </div>
      <Grid>
        <Row>
          {
            products.map((product, index) => (
              <Col xs={6} md={4} key={index}>
                <Product name={product.name} price={product.price} imageSrc={product.imageSrc}/>
              </Col>
            ))
          }
        </Row>
      </Grid>
    </div>
  );
}

export default Home;