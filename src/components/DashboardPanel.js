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
    width: '750px',
    border: '2px solid blue'
  },
  image: {
    width: 128,
    height: 128,
  },
  bigAvatar: {
    marginTop: '25px', 
    width: 75,
    height: 75,
  },
  card: {
    maxWidth: 400,
    border: '2px solid blue'
  },
  cardHeader: {
    flex:1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
    textColor:'black',
    fontSize: '12px',
    
  },
  cardDetail: {
    flex:1,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
    textColor:'black',
    
    
  },

  circleText:{
    /* circle styles */
  width: '75px',
  height: '75px',
  marginLeft: '50px',
  border: '1px solid blue',
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
        <Grid container spacing={24}>
        <FontAwesomeIcon icon={props.position <=3 ? faTrophy: null} size="2x" style={{ color: props.position === 1 ? '#ffc400':props.position === 2? '#C0C0C0': '#cd7f32' }}/>
          <Grid item>
          
            <ButtonBase className={props.classes.image}>
            <Avatar className={props.classes.bigAvatar}  
            alt={`Avatar n°${props.name + 1}`}
            src={props.avatar}/>
           
            </ButtonBase>
            
          </Grid>
          
         
          <Grid item xs={'auto'} sm container>
            <Grid item xs container direction="column" spacing={8}>
              <Grid item xs>
                
                <Card >
                  <CardHeader  style={{ fontSize: '12px' }}className={props.classes.cardHeader} title={props.name}/>
                  <Divider/>
                  <CardContent className={props.classes.cardDetail}>
                    <Typography   variant='subtitle1' color="inherit" gutterBottom>
                      {`Answered Questions ${props.answers}`} 
                    </Typography>
                    <Typography  variant='subtitle1' color="inherit" gutterBottom>
                      {`Created Questions ${props.questions} `}
                    </Typography>
                    <Typography  variant='subtitle1' color="inherit" gutterBottom>
                      {`Total  ${props.questions+props.answers} `}
                    </Typography>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={'auto'} sm container>
            <Grid item xs container direction="column" spacing={8}>
              <Grid item xs>
                <Card >
                  <CardHeader variant='h6' className={props.classes.cardHeader} title={'Score'}/>
                  <Divider/>
                  <CardContent>
                    <div className={props.classes.circleText} style={{ backgroundColor: props.position === 1 ? '#ffc400':props.position === 2? '#C0C0C0': '#cd7f32' }} >
                        {props.questions+props.answers}
                        
                    </div>	
                    <Grid item xs={'auto'} sm container>
                      <Grid item xs container direction="column" spacing={8}>
                        <Grid item xs>
                        <Typography   direction='row' variant='subtitle1' color="inherit" gutterBottom>
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