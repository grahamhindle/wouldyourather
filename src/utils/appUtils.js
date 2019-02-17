import _ from 'lodash'

export const noOp = () => ({ type: "NO_OP" })

export const apiPayloadCreator = ({
  dataType = null,
  callingFn = noOp,
  onSuccess = noOp,
  onFailure = noOp,
  label = "",
  data = null
}) => ({ 
  dataType,
  callingFn,
  onSuccess,
  onFailure,
  data,
  label
});

export function getUserByAuthor(users, user) {
  return (_.findkey(users, x => x.id === user))
}  
export function getSelectedAnswer(answers,id,answered){
  // 
  const x = answers.filter(key => key = id)
  switch (answered) {
    case 0:
    return false
    case 1:
      return x
    default:
      break;

  }
}


export function getAnsweredQuestions(answers,id) {
  
  const x = Object.keys(answers)
  const y = x.filter(key => key === id) 
  if ( y.length >0 )
  return true
  
}

export function getUnansweredQuestions(answers,id) {
  const x = Object.keys(answers)
  const y = x.filter(key => key === id)
  
  if ( y && y.length){
    return false
  } 
  else {
    return true
  }
}


export const calcPercent = ( num,denom) =>{
  if ( denom >= 1 && num >=1) {
    return (num/(num+denom)) * 100
  }  else if (denom === 0 && num > 0){
      return 100
  }
  else
    return 0
}