import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom'
import {AppBar,Avatar} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


    const styles =theme => ({
      root: {
        position: 'fixed',
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
        margin: 10,
        width: 60,
        height: 60,
      },
    })




function AppBarControl(props) {
  const { classes ,user} = props
  console.log(props)

  
  return (
    <div className={classes.root}>
      <AppBar position="fixed"color='inherit' className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Would You Rather...
          </Typography>
          <Typography className={classes.grow} variant="h6" color="inherit" className={classes.grow}>
             Welcome {user.name}
          </Typography>
          <Link to={'/profile'}>
          <Button  color="inherit" className={classes.button}>
        Logoff
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Avatar alt="Remy Sharp" src={user.avatarURL} className={classes.avatar} />
      </Button>
          
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}

AppBarControl.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppBarControl)