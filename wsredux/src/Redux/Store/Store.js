import {createStore} from 'redux';
import RouterReducer from '../Reducer/Index';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = createStore (RouterReducer,DevTools) ;

export default Store ; 