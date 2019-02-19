import React, {Component} from 'react'
import StyledLink from '../styled/StyledLink'
import { Card,
        CardMedia,
        CardContent,
        Typography,
        } from '@material-ui/core'
        import { withStyles } from '@material-ui/core/styles';
       

const styles = theme => ({
  card: {
    flexGrow: 1,
    backgroundColor: 'white',
    border: '1px solid blue',
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
 
    <div style={{height:'50%', width:'50%' , marginTop:'100px' ,                    marginLeft: '25%', color:'white'}}>
    <StyledLink
      style={{color:'#FFFFFF', decoration:'none'}}
      to={'/profile'}
    >
      

      <Card  className={classes.card}>
        <CardMedia
          className={classes.media}
          style={{height: 400}}
          image={require("../images/demo.png")}
          title="demo screen"
          >
          </CardMedia>
        
          <Typography align='center' gutterBottom variant="headline" component="h2">
            A game of decisions
          </Typography>
          <Typography align='center' component="p">
            Click anywhere on the question panel to Logon
          </Typography>
       
      </Card>
      </StyledLink>
      
      </div>
    )
  }
} 
  
export default withStyles(styles)(Startup);


