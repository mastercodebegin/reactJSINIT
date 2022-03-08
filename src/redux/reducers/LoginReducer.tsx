import { ActionConstants, } from "../constant/ActionConstant";

const initialState='login initiate' 
 const LoginReducer=(state=initialState,action:any)=>{
    console.log('reducer--------',action);
    switch(action.type){
        case ActionConstants.LOGIN_INITIATE:
        return 'login initiate' 
        case 'decreament':
        return 'state-1'
        default:
        return state

    }
    
}
export default LoginReducer