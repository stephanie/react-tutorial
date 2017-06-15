import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Thumbnail, Button} from 'react-bootstrap';
import {setCartQuantity} from '../actions/cartActions';

const Product = ({name, price, imageSrc, quantity, setCartQuantity}) => {
  const increaseCartQuantity = () => {
    setCartQuantity({quantity: quantity + 1});
  };

  return (
    <Thumbnail src={imageSrc}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>
        <Button bsStyle="primary" onClick={increaseCartQuantity}>Add to cart</Button>
      </p>
    </Thumbnail>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageSrc: PropTypes.string,
  setCartQuantity: PropTypes.func,
  quantity: PropTypes.number
}

const mapStateToProps = (state) => ({
  quantity: state.cart.quantity
});

const mapDispatchToProps = (dispatch) => ({
  setCartQuantity: (quantity) => dispatch(setCartQuantity(quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
