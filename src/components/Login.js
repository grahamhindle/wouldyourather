import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { ListItem, ListSubheader} from '@material-ui/core'
import {ListItemAvatar ,Avatar, Tooltip } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const tbdText = `Not yet implemented`

const styles = theme => ({
  root: {
    margin:'auto',
    marginTop: '100px',
    padding: '20px',
    backgroundColor: '#eeeeee',
    width: '25%',
    maxHeight: '500px',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheader:{
    backgroundColor: 'inherit',
    border: '1px solid blue',
    fontSize:'24px',
    alignItems:'center',
    justifyContent: 'center',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit * 2,
  },
  iconSmall: {
    fontSize: 15,
  },
})
class Login extends Component {
  state = {
    open:false,
    selectedIndex: 1,
    loggedOn:false,
  }
  

  authUser = ( event,index) => {
    this.setState({ selectedIndex: index, loggedOn:true })
    
    this.props.setAuthedUser(index)
    //got to home page
  }

  handleOpen = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  }

  


  render(){
    const { classes, users} = this.props
  
  return (
    <div className={classes.root}>
     
        <List
          component="nav"
          subheader={<ListSubheader 
          className={classes.subheader} 
          color='primary' 
          component="div">Login to continue
          </ListSubheader>}
          className={classes.paper}
          color='primary'
        >
        <Divider/>
        {users.map((user) => (
        <ListItem
          className={classes.listitem}
          button={true}
          key={user.id}
          selected={this.state.selectedIndex === user.id}
          onClick={ event => this.authUser(event,user.id) }
        >
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${user.name + 1}`}
            src={user.avatarURL}
          />
        </ListItemAvatar>
        <ListItemText primary={user.name}/>
        </ListItem>
        ))} 
        <Divider/>
        {this.state.loggedOn && 
          <Link to="/questions" style={{color:'#FFFFFF', decoration:'none'}} >Home</Link>
        }
        <Tooltip title={tbdText}>
        <Button variant='contained'  className={classes.button} aria-label="Login" color="primary">

        {' Register  '} 
       
        <FontAwesomeIcon className={classes.rightIcon} icon="sign-in-alt"/>
        </Button>
        </Tooltip>
      </List>
   
  </div>
  )
      }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

 export default withStyles(styles)(Login)
