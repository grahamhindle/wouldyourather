import React from 'react'
import { GridList,Divider,CardContent,Card,CardHeader, ButtonBase,Typography,Grid, ListItem ,ListItemAvatar,ListItemText,Avatar,Paper}from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/pro-regular-svg-icons'

library.add(faTrophy)



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    width: '750px'
  },
  image: {
    width: 128,
    height: 128,
  },
  bigAvatar: {
    margin: 20, 
    width: 90,
    height: 90,
  },
  card: {
    maxWidth: 400,
  },
  cardHeader: {
    flex:1,
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    textColor:'white',
    fontSize: '12px',
    
  },

  circleText:{
    /* circle styles */
  width: '75px',
  height: '75px',
  marginLeft: '50px',
  border: '2px solid blue',
  backgroundColor: 'lightgray',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})
const DashboardPanel= props =>(
  
   <div className={props.classes.root}>
      <Paper className={props.classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={props.classes.image}>
            <Avatar className={props.classes.bigAvatar}  
            alt={`Avatar n°${props.name + 1}`}
            src={props.avatar}/>
            </ButtonBase>
            
          </Grid>
          
          <FontAwesomeIcon icon={props.position ===1 ? faTrophy: null} size="4x" style={{ color: 'gold' }}/>
          <Grid item xs={'auto'} sm container>
            <Grid item xs container direction="column" spacing={8}>
              <Grid item xs>
                
                <Card >
                  <CardHeader  style={{ fontSize: '12px' }}className={props.classes.cardHeader} title={props.name}/>
                  <Divider/>
                  <CardContent>
                    <Typography   variant='h6' color="inherit" gutterBottom>
                      {`Answered Questions ${props.answers}`} 
                    </Typography>
                    <Typography  variant='h6' color="textSecondary" gutterBottom>
                      {`Created Questions ${props.questions} `}
                    </Typography>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={'auto'} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Card >
                  <CardHeader variant='h6' className={props.classes.cardHeader} title={'Score'}/>
                  <Divider/>
                  <CardContent>
                    <div className={props.classes.circleText}>
                        {props.questions+props.answers}
                        
                    </div>	
                    <Grid item xs={'auto'} sm container>
                      <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                        <Typography   direction='row' variant='subtitle2' color="inherit" gutterBottom>
                      {`You are currently number  ${props.position} `}
                      </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                  </CardContent>
                  
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br/>
    </div>

)
export default withStyles(styles)(DashboardPanel)