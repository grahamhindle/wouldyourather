import React from "react"
import _ from 'lodash'
import DashboardPanel from './DashboardPanel'
import {Paper} from '@material-ui/core'

const styles ={
  root: {
    flex: 1,
    marginTop:'200px'
  },
  paper: {
    flex:1,
    paddingTop:'25px',
    alignItems: 'center',
    width: '200px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor:'gray'
  },
}

const Dashboard = (props) => {
  console.log(props)
  let count = 0
  return(
    <div  style={{marginTop:100 }} className={styles.root}>
      {props.scores.map((user)=> 
      <DashboardPanel className={styles.paper}
        key={user.id}
        id={user.id}
        position={count += 1}
        name = {user.name}
        avatar = {user.avatarURL}
        questions={user.questions.length}
        answers={Object.keys(user.answers).length}
         >
      <div style= {{marginBottom:4}}></div>
      </DashboardPanel>
      )}
  
  </div>
  )
}
export default Dashboard
