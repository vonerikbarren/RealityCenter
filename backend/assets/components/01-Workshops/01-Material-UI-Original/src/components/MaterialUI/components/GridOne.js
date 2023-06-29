import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import D3App from '../../D3/Barchart/D3App';
import D32App from '../../D3/Scatterplot/D32App';
import D33App from '../../D3/Scatterplot2/D33App';

import Responsive3 from '../../../Assets/Responsive-3.gif';
import teamwork from '../../../Assets/teamwork.gif';
// import purpleGif from '../../../Assets/purple-visual-1.gif';
import tableSVG from '../../../Assets/teamwork.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "purple",
    backgroundColor: "indigo"

  },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div style={{ backgroundColor: "DarkBlue" }} className='jumbotron  text-center text-white'>
              <h1> Using Things Correctly</h1>
              {/* <img src={purpleGif} alt='teamwork' /> */}


            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> SVG
            <div style={{ backgroundColor: "DarkBlue" }} className='jumbotron  text-center text-white'>
              <h1> An SVG! </h1>
              <img style={{ height: '600px', width: '600px' }} src={tableSVG} alt='teamwork' />




            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div style={{ backgroundColor: "DarkBlue" }} className='jumbotron  text-center text-white'>
              <h1> Using Things Correctly</h1>
              {/* <img src={purpleGif} alt='teamwork' /> */}


            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div className='jumbotron bg-dark container-fluid text-center text-white'>
              <h1> Check this out!</h1>
              <div className='text-left container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <img src={Responsive3} alt='responsive3' />
                  </div>

                  <div className='col-md-6'>
                    <img src={Responsive3} alt='purple' />
                  </div>
                </div>
              </div>
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div className='jumbotron bg-dark  text-center text-white'>
              <h1> This is React</h1>
              <D3App />
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div className='jumbotron bg-dark  text-center text-white'>
              <h1> This is React</h1>
              <D33App />
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper color='blue' className={classes.paper}> Hello React
            <div className='jumbotron bg-dark  text-center text-white'>
              <h1> This is React</h1>
              <D32App />
            </div>

          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6
          <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='jumbotron bg-dark text-light'>
                    Sexy
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='jumbotron bg-dark text-light'>
                    Sexy
                  </div>
                </div>

              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6
          <Grid item xs={3}>
              <Paper> Hello World</Paper>

            </Grid>

          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>

      </Grid>
    </div>
  );
}
