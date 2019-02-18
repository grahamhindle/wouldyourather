import React from "react"
import _ from 'lodash'
import {withStyles} from '@material-ui/core'
import DashboardPanel from './DashboardPanel'
import {Paper} from '@material-ui/core'


const styles =theme => ({
  root: {
    
    border: '1px solid blue',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 5,
    width: 90,
    height: 90,
  },
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
