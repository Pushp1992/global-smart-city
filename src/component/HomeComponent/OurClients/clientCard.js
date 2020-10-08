import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = {
  root: {
    display: 'flex',
  },
  paper: {
    maxWidth: 600,
    // margin: `${theme.spacing(1)}px auto`,
    padding: 2,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  heading: {
    marginBottom: 10,
  },
  cover: {
    width: 550,
  },
  baseCover: {
    width: 80,
    height: 80
  },
  button: {
    margin: 2,
  },
}

export default function ClientCard({data}) {
  return (
    <Card style={styles.root}>
      <div style={styles.details}>
        <CardContent style={styles.content}>
          <Typography style={styles.heading} component="h5" variant="h5">
            {data.heading}
          </Typography>
          <Paper style={styles.paper}>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item xs>
                    <Typography>{data.subheading}</Typography>
                </Grid>
            </Grid>
        </Paper>
        </CardContent>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <CardMedia style={styles.baseCover} image={data.baseImage1}  title="client motto" />
          <CardMedia style={styles.baseCover} image={data.baseImage2}  title="client motto" />
          <Button variant="contained" color="primary" style={styles.button} endIcon={<ArrowForwardIcon/>}>
            Know More
          </Button>
        </Grid>
      </div>
      <CardMedia
        style={styles.cover}
        image={data.image}
        title="who we serve"
      />
    </Card>
  );
}