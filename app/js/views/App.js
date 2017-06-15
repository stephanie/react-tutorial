import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../layouts/Menu';

const App = ({children}) => {
    return (
      <div>
        <Menu />
        { children }
      </div>
    );
}

export default App;

App.propTypes = {
  children: PropTypes.any
}