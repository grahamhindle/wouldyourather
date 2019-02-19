import { handleActions } from 'redux-actions'

import { GET_USERS,UPDATE_USER_QUESTION, UPDATE_USER_ANSWER } from '../constants/actionTypes'

const initialState={grahamhindle: {
  id: 'grahamhindle',
  name: 'Graham Hindle',
  avatarURL: 'https://www.gravatar.com/avatar/bf71a3aec5f75ee861a3c7396a190e40.jpg',
  answers: { },
  questions: []
  }
}


const users = handleActions(
  {
  [GET_USERS]: (state=initialState ,action) => action.payload,
  
  [UPDATE_USER_QUESTION]:(state ,action) => action.payload,

  [UPDATE_USER_ANSWER]: (state,action) => action.payload

  },
  {}
)
export default users


