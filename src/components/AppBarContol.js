import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginContainer from '../containers/LoginContainer';

const styles = {
  root: {
    flex: 1,
    position: 'fixed',
    border: '2px solid blue',
    alignItems:'center'
  },
  grow: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const handleClick=() => {
  return(
    <LoginContainer />
  )
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed"color='inherit' className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Would You Rather...
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);