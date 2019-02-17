import { API } from '../constants/actionTypes'
import { apiStart, apiEnd } from '../actions/apiActions'


const api = ({  dispatch }) => next => action => {
  
  next(action)
  if ( action.type !== API) return 
 
  const { callingFn, onSuccess,onFailure,label} = action.payload
  
  
  if (label) {
    dispatch(apiStart(label));
      callingFn
    .then ((data) => {
      dispatch (onSuccess(data))
    })
    .catch(error => {
      dispatch(onFailure(error))
    })
    .finally(() => {
      if ( label ) {
        dispatch (apiEnd(label))
      }
    })
    // call the user loader function
  }
}

export default api