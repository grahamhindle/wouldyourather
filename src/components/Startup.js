import React, {Component} from 'react'
import LoginContainer from '../containers/LoginContainer.js'
import {Link} from 'react-router-dom'
import { Card,
        CardMedia,
        CardActionArea,
        CardContent,
        CardActions,
        Typography,
        Grid,
        Button, 
        ButtonBase} from '@material-ui/core'
        import { withStyles } from '@material-ui/core/styles';
        import classnames from 'classnames';


//welcome screen
//button to logon

const styles = theme => ({
  card: {
    flexGrow: 1,
    maxWidth: '100%',
    
    
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  media: {

    height: '50%',
    paddingTop: '56.25%', // 16:9
    
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
})


class  Startup extends Component {
  state={
    isLogon: false
  }
  
  handleClick=(event) => {
    this.setState({isLogon:true})
    
    }
  render(){
    const {classes} = this.props

    return(
      
<div style={{height:'50%', width:'50%' , marginTop:'100px' , marginLeft:'25%'}}>
      <Link
      style={{color:'#FFFFFF', decoration:'none'}}
      to={'/profile'}
      >
      

      <Card  className={classes.card}>
        <CardMedia
          className={classes.media}
          style={{height: 400}}
          image={require("../images/homescreen.png")}
          title="Paella dish"
          >
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            A game of decisions
          </Typography>
          <Typography component="p">
            Click anywhere to Login
          </Typography>
        </CardContent>
      </Card>
      </Link>
      
      </div>
    )
  }
} 
  
export default withStyles(styles)(Startup);


