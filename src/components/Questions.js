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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin:'auto',
    marginTop: '100px',
    padding: '20px',
    backgroundColor: '#eeeeee',
    width: '50%',
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
    const { classes,  questions} = this.props
    
    const {value} =this.state.value
    return (
      <Paper className={classes.paper}>
         <AppBar  position="static" >
           <Tabs variant='fullWidth' value={this.state.value} onChange={this.handleChange} >
             <Tab color='#73AD21'label="Unanswered" />
             <Tab label="Answered" />
             
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
       
    )
  }
}
 
    
export default withStyles(styles)(Questions)
