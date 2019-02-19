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

    handleChange = () => {
      
    }

  render() {
    
   
    const { classes } = this.props
    return (
      <BottomNavigation
        
        onChange={this.handleChange}
        showLabels
        className={classes.stickToBottom}
        >
        <BottomNavigationAction 
          component={Link} 
          to="/"
          label="Home" 
          
          icon={<FontAwesomeIcon icon="home" color='inherit' disabled  />}/>
        <BottomNavigationAction 
          component={Link} 
          to="/newq"
          label="NewQuestion" 
          
          icon={<FontAwesomeIcon icon="question-square" color='inherit' disabled  />}/>
        <BottomNavigationAction 
          component={Link} 
          to="/score"
          label="Score" 
          
          icon={<FontAwesomeIcon icon="tachometer" color='inherit' disabled  />} />
      
        <BottomNavigationAction 
        component={Link} 
          to="/profile"
          label= "Sign In"
          icon={<FontAwesomeIcon icon="sign-in" color='inherit' disabled  />}/>
      
        <BottomNavigationAction 
          component={Link} 
            to="/startup"
            label= {'Demo mode'}
            icon={<FontAwesomeIcon icon="info-circle" color='inherit' disabled  />}/>
      </BottomNavigation> 
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);