import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Paper,Grid} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Bars from 'react-bars'
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import produce from 'immer';


const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const styles = theme =>({
  root:{
    border: '1px solid blue',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  paper: {
    flex:1,
    flexGrow: 1,
    margin:'auto',
    border: '1px solid blue',
    alignItesm:'center',
    marginTop: '10px',
    marginBottom:'10px',
    padding: '20px',
    backgroundColor: 'white',
    width: '100%',
    maxHeight: '250px',
  },
  badge:{
    flex:1,
    backgroundColor: '#eeeeee',
    borderStyle: 'solid',
    borderColor: 'black',
    width: '25px',
    direction:"column",
    justify:"flex-end",
    alignItems:"flex-end",
  },
  margin: {
    margin: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit ,
    width:'25px'
  },
  dtitle:{
    backgroundColor: 'blue',
    borderStyle: 'solid',
    borderColor: 'black',
    width: '100%',
  },
  bigAvatar: {
    margin: 20,
    width:90,
    height: 90,
  },
  smallAvatar: {
    margin: 2,
    width: 20,
    height: 20,
  },
  blockStyle: {
    backgroundColor:'tomato',
    width: '100%',
  },
  barLabel: {
    font:"8px 'opensans-bold', sans-serif",
    color: 'blue'
  },
  icon: {
    flex:1,
    marginTop: '10px',
    marginLeft: '10px',
    direction:"column",
    justify:"center",
    alignItems:"center",
  },
})

const score = (state,props ) => produce(state,(draft)=> {
  draft[0].value= Number(props.votes.opt1percent)
  draft[0].label=String(props.votes.opt1percent)+ '%'
  draft[0].barColor='#2a2abe'
  draft[1].value= Number(props.votes.opt2percent)
  draft[1].label=String(props.votes.opt2percent)+ '%'
  draft[1].barColor='#2a2abe'
  

  
  
})

class SimpleDialog extends React.Component {
  state= {
    barData:[
       {
          label:"75%", 
          value:75, 
          barColor:blue,  
          barHeight: 32,
          makeUppercase: false,
          suffix:'%'
      },
      {
          label:"75%", 
          value:75, 
          barColor:blue,  
          barHeight: 32, 
          makeUppercase: 
          false,suffix:'%'
      },
    ]
  }

  handleClose = () => {
    this.props.onClose();
  };

  handleListItemClick = value => {
    this.props.onClose(value)
  }

  
  static getDerivedStateFromProps(nextProps, state) {
      
       state.barData = score(state.barData,nextProps)
        
   
  }
  

 

  render() {
    const { classes, votes,  author, question } = this.props;
    
    return (
      <div className={classes.root} style={{backgroundColor:'#D5DBDB'}}>
      <Dialog  fullWidth={true}
          maxWidth={'md'} onClose={this.handleClose}open={this.props.open}>
        <DialogTitle className={classes.dtitle} color='primary' id="customized-dialog-title" onClose={this.handleClose}>
           {`Asked by: ${ author.name} `}
        </DialogTitle>
        <Grid container spacing={8}>
          <Grid >
            <Avatar className={classes.bigAvatar} 
              alt={`Avatar n°${author.author + 1}`}
              src={author.avatarURL}
            />
          </Grid>
          <Grid item xs={4} sm container>
            <Grid item xs container direction="column" spacing={24}>
              <Grid item xs>
                <Typography color='inherit' variant='h6' >
                  Results
                </Typography>
                
                <Paper className={classes.paper}>
                  <Typography color='inherit' variant='body1' >
                    {question.optionOne.text}
                  </Typography>
                  <div >
                  <Bars data={[this.state.barData[0]]} barColor='#2a2abe' />
                  </div>
                  <Typography color='inherit' variant='body1' gutterBottom >
                    {`${votes.opt1} out of ${votes.opt1+votes.opt2} votes`}
                  </Typography> 
                  {votes.match1 ?
                    <Typography color='inherit' variant='body1' >
                      your vote!
                      <Icon className={classNames(classes.icon, 'fas fa-vote-yea')}/>
                    </Typography>: null 
                  }
                </Paper>
                
                <Typography color='inherit' variant='h6'>
                    Or
                </Typography>
                <Paper className={classes.paper}>
                  <Typography color='inherit' variant='body1'>
                    {question.optionTwo.text}
                  </Typography>
                  <div >
                  <Bars data={[this.state.barData[1]]} barColor='#2a2abe'  />
                  </div>
                    <Typography color='inherit' variant='body1' gutterBottom>
                      {`${votes.opt2} out of ${votes.opt1+votes.opt2} votes`}
                    </Typography>
                    {!votes.match1 ?
                      <Typography color='inherit' variant='body1' >
                      your vote!
                        <Icon className={classNames(classes.icon, 'fas fa-vote-yea')}/>
                      </Typography>: null 
                    }
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Dialog>
        </div>
      )
    }
  }

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    
  };
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };
  render() {
    return (
      <div>
        <Button  
          variant='contained' 
          size='large' 
          fullWidth={true} 
          onClick={() => this.handleClickOpen()}
        >
          Show Results
          </Button> 
        <SimpleDialogWrapped
          open={this.state.open}
          onClose={this.handleClose}
          {...this.props}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;