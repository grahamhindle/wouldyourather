import React, { Component } from "react"
import {Paper,Button, AppBar,TextField} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'




const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
  },
  type: {
    flex:1,
    backgroundColor: 'lightgray',
    border: '2px solid blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container: {
    display: 'flex',
    flexWrap: 'wrapoff',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%',
  },
  button: {
    margin: theme.spacing.unit,
    height: '50px',
    width: '25px'
  },
  dense: {
    marginTop: 19,
  },
  stickToBottom: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    alignItems: 'flex-end',
    bottom: 0,
    width: '15%',
    flexDirection: 'row',
    border: '2px solid blue',
    
    flex:1,
  },
  paper: {
    margin:'auto',
    marginTop: '100px',
    padding: '20px',
    backgroundColor: '#eeeeee',
    border: '2px solid blue',
    width: '50%',
    maxHeight: '300',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
})

const  NewQTabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class NewQuestion extends Component {
  state = {
    value:0,
    open: true,
    optionOneText: '',
    optionTwoText: '',
  }
  componentDidMount(){
   
      }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }
  handleQuestion = () => {
    const {optionOneText,optionTwoText} = this.state
    const { author} = this.props
    this.props.saveNewQuestion({optionOneText, optionTwoText,author})
  }

  
  render() {
    const { classes} = this.props
    const {value} =this.state.value
    return (

       <Paper className={classes.paper}>
         <AppBar  position="static" >
         
           <Typography variant="h6" className={classes.type}  >Please enter a new Question</Typography>
           </AppBar>


         {value === 0 && <NewQTabContainer>New Question</NewQTabContainer>}
         <form className={classes.container} noValidate autoComplete="off">
         <Grid item xs={6}>
         
       
        <TextField
        onChange={this.handleChange('optionOneText')}
          id="standard-with-placeholder"
          label="Would You Rather"
          placeholder="Option One"
          className={classes.textField}
          margin="normal"
        />     

        <TextField
        onChange={this.handleChange('optionTwoText')}
        id="standard-with-placeholder"
        label="Or..."
        placeholder="Option Two"
        className={classes.textField}
        margin="normal"
      />   
      </Grid>
      <Grid item xs={3}>
      <Button  variant="contained" size="small"  className={classes.stickToBottom} onClick={this.handleQuestion}>
          Submit
        </Button>
        <Button  variant="contained" size="small"  className={classes.stickToBottom}>
          Cancel
        </Button> 
        </Grid>
      
         

       
        </form>
         </Paper>
    )
  }
}
export default withStyles(styles)(NewQuestion)