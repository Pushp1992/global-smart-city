import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Grid from "@material-ui/core/Grid";

const IMG_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1602412250/smart-city/our-purpose";

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
    // gridGap: theme.spacing(3),
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    // marginBottom: theme.spacing(1),
  },
  typography: {
    width: '100%',
    maxWidth: 500,
  },
  body1: {
    marginTop: 50,
  }
};

export default function OurPurpose() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12} spacing={3}>
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
            <Grid item xs={6} spacing={3}>
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
            <Grid item xs={6} spacing={3}>
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
        <Parallax className="custom-class" y={[-2, 100]} tagOuter="figure">
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
      </Grid>
    </div>
  );
}
