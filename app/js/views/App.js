import React, {PropTypes} from 'react';
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