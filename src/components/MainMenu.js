import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





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
  state={
    disableMenuItem: true,
    value: 'login'
  }
  
    handleChange = (event,value) => {
      this.setState({ value });
    }
    

  render() {
    
   
    const { classes } = this.props
    const {value } = this.state
    return (
      <BottomNavigation
        onChange={this.handleChange}
        showLabels
        value={value}
        className={classes.stickToBottom}
        >
        <BottomNavigationAction 
          component={Link} 
          to="/questions"
          label="Home"
          icon={<FontAwesomeIcon icon="home" color='inherit'/>}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/add"
          label="NewQuestion" 
          icon={<FontAwesomeIcon icon="question-circle" color='inherit'/>}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/leaderboard"
          label="Leader Board" 
          icon={<FontAwesomeIcon icon="tachometer-alt" color='inherit'/>} 
        />
        <BottomNavigationAction 
        component={Link} 
          to="/profile"
          label= "Sign In"
          icon={<FontAwesomeIcon icon="sign-in-alt" color='inherit'/>}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/"
          label= {'Demo mode'}
          icon={<FontAwesomeIcon icon="info-circle" color='inherit'/>}
        />
      </BottomNavigation> 
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);