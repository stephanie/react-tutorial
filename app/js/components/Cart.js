import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setCartQuantity} from '../actions/cartActions';

const Cart = ({quantity, setCartQuantity}) => {
  const increaseCartQuantity = () => {
    setCartQuantity({quantity: quantity + 1});
  };

  return(
    <div className="cart" onClick={increaseCartQuantity}>
      Cart: {quantity}
    </div>
  );
}

Cart.propTypes = {
  quantity: PropTypes.number,
  setCartQuantity: PropTypes.func
}

const mapStateToProps = (state) => ({
  quantity: state.cart.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  setCartQuantity: (quantity) => dispatch(setCartQuantity(quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);