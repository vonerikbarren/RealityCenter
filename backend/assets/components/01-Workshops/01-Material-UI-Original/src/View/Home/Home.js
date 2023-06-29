import React from 'react';
import { makeStyles, mergeClasses } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import Header from '../../components/MaterialUI/components/Header';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: "indigo",
    // boxShadow: "5px 5px 15px 5px #000000"


  },

}));

export default function Home() {
  const mui = useStyles();
  return (
    <div>
      <Header />


      <Grid container spacing={4}>

        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <h1>Home</h1>
            <a href='./drawer1' target="_blank">Test Drawer</a>
            <br />
            <a href="https://www.w3schools.com/html/" target="_bkank"  >Visit our HTML tutorial</a>
            <br />

            <Grid container>
              <Grid item xs={6}>
                <Paper style={{ backgroundColor: "purple" }}> Hello</Paper>

              </Grid>

              <Grid item xs={6}>
                <Paper
                  style={{
                    backgroundColor: "rgba(130, 0, 120, 0.99)",
                    boxShadow: "2px 2px 15px 2px"

                  }}>
                  This is a test
                </Paper>
              </Grid>
            </Grid>


          </Paper>
        </Grid>

      </Grid>


    </div>

  );
}