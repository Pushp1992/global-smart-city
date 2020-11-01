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
  root: {
    //   padding: 5,
    // maxWidth: 345,
  },
  media: {
    height: 240,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  paper: {
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  typography: {
    width: '100%',
    maxWidth: 500,
  },
  body1: {
    marginTop: 50,
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


{/* <Grid container spacing={1}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Card style={styles.root}>
                <CardActionArea>
                  <CardMedia
                    style={styles.media}
                    image={`${IMG_URL}/mission_kjxtfm`}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={styles.root}>
                <CardActionArea>
                  <CardMedia
                    style={styles.media}
                    image={`${IMG_URL}/values_wxmsv9`}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={styles.root}>
                <CardActionArea>
                  <CardMedia
                    style={styles.media}
                    image={`${IMG_URL}/vision_zzj4s2`}
                    title="test"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
        <ParallaxProvider>
        <Parallax className="custom-class" y={[-2, 80]} tagOuter="figure">
          <div style={styles.typography}>
            <Typography variant="h6" gutterBottom>
              Accrediting Decision makers to accomplish Valorous results
            </Typography>
            <Typography variant="body1" gutterBottom style={styles.body1}>
              GCP is determined to support the Decision makers for efficient
              city management &nbsp; better quality of life of the citizens.
            </Typography>
          </div>
          </Parallax>
          </ParallaxProvider>
        </Grid>
      </Grid> */}