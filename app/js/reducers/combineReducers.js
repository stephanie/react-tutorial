import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const App = combineReducers({
  cart: cartReducer
});

export default App;
