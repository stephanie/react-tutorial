import React from 'react';
import { Link } from 'react-router';
import Cart from '../components/Cart';

const Menu = () => {
  return (
    <div className='Menu'>
      <Link to='/'>Home</Link> <Link to='/about'>About</Link>
      <Cart/>
      <hr />
    </div>
  );
}

export default Menu;