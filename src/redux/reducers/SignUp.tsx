import { ActionConstants, } from "../constant/ActionConstant";

const initialState='signup'
 const SignUpReducer=(state=initialState,action:any)=>{
    console.log('reducer--------',action);
    switch(action.type){
        case ActionConstants.SIGN_INITIATE:
        return 'signup' 
        case 'decreament':
        return 'state-1'
        default:
        return state

    }
    
}
export default SignUpReducer