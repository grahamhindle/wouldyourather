import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import StyledAppBar from '../styled/StyledAppBar'
import { _setAuthedUser } from '../utils/_Data';




//styling for components
const styles =theme => ({
  root: {
  position: 'fixed',
  flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  avatar: {
    margin: 10,
  },
})

const handleClick=()=> {
  
 
 }

function AppBarControl(props) {
  const { classes ,user} = props
  
  console.log(props)
  
  return (
    <div className={classes.root}>
      <StyledAppBar color='primary'  position="fixed" >
        <Toolbar color='default'>
          <Typography variant="h6" color="default" className={classes.grow}>
            Would You Rather...
          </Typography>
          <Typography className={classes.grow} variant="h6" color='default' >
             Welcome { typeof user !== 'undefined' ? user.name: 'login to contine'}
          </Typography>
          <Link to={'/profile'} style={{color:'lightgray',decoration:'none'}}>
          <Button  color="primary" className={classes.button}
          onClick={() => props.setAuthedUser('')}
          >
            Logoff
            <Avatar 
              alt={`Avatar n°${typeof user !== 'undefined' ?user.name + 1: ''}`}
              src={typeof user !== 'undefined' ?user.avatarURL: ''} 
              className={classes.avatar} />
          </Button>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

AppBarControl.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppBarControl)