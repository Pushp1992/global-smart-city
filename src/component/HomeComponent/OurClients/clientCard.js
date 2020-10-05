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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 550,
  },
  baseCover: {
    width: 80,
    height: 80
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ClientCard({data}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {data.heading}
          </Typography>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item xs>
                    <Typography>{data.subheading}</Typography>
                </Grid>
            </Grid>
        </Paper>
        </CardContent>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <CardMedia className={classes.baseCover} image={data.baseImage1}  title="client motto" />
          <CardMedia className={classes.baseCover} image={data.baseImage2}  title="client motto" />
          <Button variant="contained" color="primary" className={classes.button} endIcon={<ArrowForwardIcon/>}>
            Know More
          </Button>
        </Grid>
      </div>
      <CardMedia
        className={classes.cover}
        image={data.image}
        title="who we serve"
      />
    </Card>
  );
}