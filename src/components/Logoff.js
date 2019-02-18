import React, { Fragment } from "react"
import MainMenu  from './MainMenu'
import Users from './Users'

const Logoff = (props) => {
  console.log(props.author)

  return (
    <div style={{height:'50%', width:'50%' , marginTop:'100px' , marginLeft:'25%'}}>
     `logging off {props.loggedonData.author}'</div>
  )
}
export default Logoff
