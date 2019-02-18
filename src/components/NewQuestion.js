import React, { Component } from "react"
import {Paper,Button, AppBar,TextField} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'




const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop:'200px',
    width:'50%',
    marginLeft:'25%'
    
  },
  type: {
    flexGrow:1,
    backgroundColor: 'white',
    textColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container: {
    
    flexWrap: 'wrapon',
    border: '1px solid blue',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
   


  },
  help:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrapoff',
    border: '2px solid blue',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
    marginLeft:'50%',
    marginTop:'25%'

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
    alignItems: 'flex-end',
    flexDirection:'row',
    bottom:0,
    
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    
    
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
      <div className={classes.root}>
       <Paper className={classes.paper}>
           <Typography variant="h6" color="inherit"  >
             Enter a new Question</Typography>
         {value === 0 && <NewQTabContainer>New Question</NewQTabContainer>}
         <form className={classes.container} noValidate autoComplete="off">
         <Grid item xs={12}>
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
      
        <Button  variant="contained" size="small"  className={classes.button} onClick={this.handleQuestion}>
          Submit
        </Button>
        <Button  variant="contained" size="small"  className={classes.button}>
          Cancel
        </Button> 
      </Grid>
      <Grid item xs={12}>
      <Typography className={classes.container} variant="body1" color="inherit"  >
      If you enter a question make sure both option one and Option two are entered WE DO NOT valid for valid questions at this time</Typography>
      </Grid>
        </form>
         </Paper>
         </div>
    )
  }
}
export default withStyles(styles)(NewQuestion)