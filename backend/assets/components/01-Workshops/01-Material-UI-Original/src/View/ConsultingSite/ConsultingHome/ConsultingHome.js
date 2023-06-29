import React, { useRef, useEffect } from 'react';
import './ConsultingHome.css';

// -=-=-=-=-=-=-=-=
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Background2 from '../../../Assets/Background2.jpg'


import ConsultingNavbar from '../ConsultingNavbar/ConsultingNavbar';

import { TweenMax, Power3 } from 'gsap';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "purple",
    backgroundColor: "rgba(130, 0, 120, 0.2)"
  }


}))

export default function Home() {
  const mui = useStyles();

  let backgroundItem = useRef(null);
  let paperItem = useRef(null);

  useEffect(() => {
    console.log(backgroundItem);
    TweenMax.from(
      backgroundItem, 8, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut
    }

    )
  }, [])

  useEffect(() => {
    console.log(paperItem);
    TweenMax.from(
      paperItem, 8, {
      opacity: 0,
      x: -200,
      y: -20,
      ease: Power3.easeOut
    }

    )
  }, [])



  return (
    <div className="consulting" >
      {/*Navigation Section of Page */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <ConsultingNavbar />
            <img className="backgroundItem" ref={el => { backgroundItem = el }}
              style={{ height: 700, width: 1100, opacity: 1 }}
              src={Background2} />

          </Paper>
        </Grid>
      </Grid>







      {/* This is an instance of Building a Grid System for a traditional style website */}
      {/*Use the Commented Grid for the Content to be used. */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper ref={el => { paperItem = el }} elevation={0} className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

              {/* Edit this area where necessary */}
              <Grid item xs={8}>
                <Paper className={mui.paper}>
                  <Typography variant="overline">Card Test</Typography>
                  <Card></Card>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* This is an instance of Building a Grid System for a traditional style website */}
      {/*Use the Commented Grid for the Content to be used. */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

              {/* Edit this area where necessary */}
              <Grid item xs={8}>
                <Paper className={mui.paper}>

                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>


      {/*This section is specifically for practicing a layout using cards */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/*This section is specifically for practicing a layout using cards */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/*-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/}
      {/*Note-4/21/20- Working with Material-UI again*/}
      {/*->-> Building a 4-box-even */}
      {/*-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={3}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textPrimary">
                        Hello Test
                       </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textPrimary">
                        Hello Test
                       </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


              <Grid item xs={3}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textPrimary">
                        Hello Test
                       </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


              <Grid item xs={3}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textPrimary">
                        Hello Test
                       </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/*-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/}
      {/*Note-4/21/20- Working with Material-UI again*/}
      {/*->-> Building a 3-box-center-column */}
      {/*-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/}

      <Grid container spacing={3}>
        <Grid items xs={12}>
          <Paper className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        React
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


              <Grid item xs={8}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        React
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        React
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>



      {/*--Final Div--*/}
    </div >

  );
}