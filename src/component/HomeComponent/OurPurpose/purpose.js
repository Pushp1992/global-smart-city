import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Grid from "@material-ui/core/Grid";
import {Purpose} from '../../../utils/ourPurpose';

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  cardRoot: {
    maxWidth: 345,
  },
  parentRoot: {
    flexGrow: 1,
    marginTop: '2rem'
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  prefix: {
    color: '#37abab',
    fontWeight: 'bold'
  },
  subHeading: {
    color: 'teal'
  },
  subheading1: {
    fontSize: 'medium',
  }
};

export default function OurPurpose() {
  const content = Purpose;
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h5">{content.heading}</Typography>
        </Grid>
      </Grid> <br/>
      <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap" spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h6">
            <span style={styles.prefix}>{content.prefix}</span>
            <span style={styles.subheading1}>{content.subheading}</span>
            </Typography>
        </Grid>
      </Grid>

      <Grid container style={styles.parentRoot} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing={2}>
          {content.purpose.map((data) => {
            return (
              <Grid key={data.id} item>
                <Card style={styles.cardRoot}>
                  <CardHeader
                    title={data.tagLine}
                  />
                  <CardMedia
                    style={styles.media}
                    image={data.imageUrl}
                    title={data.tagLine}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <label style={styles.subHeading}>{data.subHeading}</label>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}