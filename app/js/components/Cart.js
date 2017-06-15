import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Cart = ({quantity}) => {
  return(
    <div className="cart">
      Cart: {quantity}
    </div>
  );
}

Cart.propTypes = {
  quantity: PropTypes.number,
  setCartQuantity: PropTypes.func
}

const mapStateToProps = (state) => ({
  quantity: state.cart.quantity
});

export default connect(mapStateToProps)(Cart);