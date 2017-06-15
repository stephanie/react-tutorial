import React, {PropTypes} from 'react';
import Menu from '../layouts/Menu';
import Cart from '../components/Cart';

const App = ({children}) => {
    return (
      <div>
        <Menu />
        <Cart />
        { children }
      </div>
    );
}

export default App;

App.propTypes = {
  children: PropTypes.any
}