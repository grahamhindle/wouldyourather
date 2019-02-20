import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import QuestionContainer from '../containers/QuestionContainer'
import ProgressLoader from './ProgressLoader'

const styles = theme => ({
  root: {
    root: {
      flex: 1,
      backgroundColor: 'white',
      border: '1px solid blue',
      marginTop:'200px',
      width:'50%',
      marginLeft:'25%'
      
    },
  },
  paper: {
    margin:'auto',
    marginTop: '100px',
    padding: '20px',
    width: '50%',
    border: '1px solid blue',
    maxHeight: '500px',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
})

const  TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}



class  Questions extends Component {
  state = {
    open: true,
    fullWidth: true,
    maxWidth: 'sm',
    value: 0
  }
  

  componentDidMount(){
    
    this.props.getQuestionData()
    this.setState({open: true}); 
    
  }

  handleClose = (event, value) => {
      
    this.setState({open: false}); 
  }
  handleChange = (event, value) => {
   
      this.setState({value: value}); 
    }
  render(){
    const { classes,  questions, } = this.props
    
    const {value} =this.state.value
    return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
         <AppBar  color='inherit' className={classes.root} position="static"  >
           <Tabs  
            indicatorColor="primary"
            textColor="primary" 
            variant='fullWidth' 
            value={this.state.value} 
            onChange={this.handleChange} 
          >
            <Tab className={classes.root} label="Unanswered" />
            <Tab className={classes.root} label="Answered" />
          </Tabs>
         </AppBar>
         {value === 0 && <TabContainer >Unanswered</TabContainer>}
         {value=== 1 && <TabContainer>Answered</TabContainer>}
         
         {this.props.loading
          ? <ProgressLoader />:
          questions.map((question)=> (
          <div key={question.id}>
          <QuestionContainer key={question.id} 
            question={question}
            answered={this.state.value}

            >
            </QuestionContainer>
          </div>
        ))}

        
         </Paper>
         </div>
       
    )
  }
}
 
    
export default withStyles(styles)(Questions)
