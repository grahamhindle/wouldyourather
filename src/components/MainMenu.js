import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon'
import classNames from 'classnames'
import { Link } from 'react-router-dom'



const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      border: '2px solid blue',
      bottom: 0,
      flex:1,
    },
  }


class MainMenu extends React.Component {

  state = {
    value: 0,
    logonLabel:'Logon',
    loggedon: false,
  }

  componentDidMount(){
    console.log('user', this.props.authedUser)
  }

  
    handleChange = (event, value) => {
      console.log('loggedon user',this.props.loggedOn )
      this.setState((prevState) => 
      ({ loggedOn:false, value:value, logonLabel: 'Logoff' })
      )
    }
  

  render() {
    const { classes,authedUser ,...props} = this.props;
    const { value } = this.state;
    
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.stickToBottom}
      >
      
        <BottomNavigationAction 
          component={Link} 
          to="/"
          label="Home" 
          disabled={this.state.loggedon}
          icon={<Icon color='inherit'  className={classNames(classes.icon, 'fas fa-home')}/>}/>
        <BottomNavigationAction 
          component={Link} 
          to="/newq"
          label="NewQuestion" 
          disabled={this.state.loggedon}
          icon={<Icon color='inherit' disabled className={classNames(classes.icon, 'fas fa-question-circle')} />}/>
        <BottomNavigationAction 
          component={Link} 
          to="/score"
          label="Score" 
          disabled={this.state.loggedon}
          icon={<Icon color='inherit' disabled className={classNames(classes.icon, 'fas fa-poll')} />} />
      
        <BottomNavigationAction 
        component={Link} 
          to="/profile"
          label= {this.state.logonLabel}
          icon={<Icon color='primary' className={classNames(classes.icon, 'fas fa-sign-out-alt')} />}/>
      </BottomNavigation>
    )
    }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);