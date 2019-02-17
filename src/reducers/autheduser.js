import { handleActions } from 'redux-actions';
import { SET_AUTHED_USER } from '../constants/actionTypes'


const authedUser = handleActions( 
{
[SET_AUTHED_USER]: (state ,action) =>action.payload,
},
{}
)
export default authedUser

