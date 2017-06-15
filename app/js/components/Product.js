import React, {PropTypes} from 'react';

const Product = ({name, price}) => {
  return (
    <div>
      <div>
        Name: {name}
      </div>
      <div>
        Price: {price}
      </div>
    </div>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
}

export default Product;

