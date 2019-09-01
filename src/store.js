// State de la aplicacion
// getState()
// dispatch(action)
// subscribe(listener)

import { createStore } from 'redux';
import reducer from './reducers/expenses';
export default createStore(reducer);
