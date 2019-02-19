import React from "react"
import {withStyles} from '@material-ui/core'
import DashboardPanel from './DashboardPanel'
import {Paper} from '@material-ui/core'


const styles =theme => ({
  paper: {
    margin:'auto',
    marginTop: '100px',
    padding: '20px',
    height:'75%',
    width: '50%',
    border: '1px solid blue',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



const Dashboard = (props) => {
  console.log(props)
  const {classes} =props
  let count = 0
  return(
    <Paper className={classes.paper}>
      {props.scores.map((user)=> 
      <DashboardPanel 
        key={user.id}
        id={user.id}
        position={count += 1}
        name = {user.name}
        avatar = {user.avatarURL}
        questions={user.questions.length}
        answers={Object.keys(user.answers).length}
         >
      <div style= {{marginTop:2}}></div>
      </DashboardPanel>
      )}
  
      </Paper>
  )
}
export default withStyles(styles)(Dashboard)
