import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import SignUpReducer from './SignUp'



const RootReducer=combineReducers({
    LoginReducer, 
    SignUpReducer
})
    

export default RootReducer