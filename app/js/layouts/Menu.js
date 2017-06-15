import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <div className='Menu'>
      <Link to='/'>Home</Link> <Link to='/about'>About</Link>
      <hr />
    </div>
  );
}

export default Menu;