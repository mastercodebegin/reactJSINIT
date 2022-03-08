import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducers from '../reducers/RootReducer'


const Store= createStore(RootReducers,composeWithDevTools())

export default Store

