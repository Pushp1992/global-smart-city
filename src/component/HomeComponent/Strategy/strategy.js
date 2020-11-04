import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { StrategyData } from "../../../utils/strategy";

const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/video/upload/v1604305514/smart-city";

const styles = {
  cardRoot: {
    color:'white',
    maxWidth: 345,
    backgroundColor: 'black'
  },
  parentRoot: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  subHeading: {
    color: "white",
  },
  imagePosition: {
    position: "absolute",
  },
  strategyPos: {
    zIndex: "9",
    opacity: "0.7",
  },
  imageStyle: {
    imageRendering: "crisp-edges",
    width: "-webkit-fill-available !important",
    height: "100%",
  },
  marginTop: {
    color: 'white',
    marginTop: '10rem'
  }
};

const StrategyCard = () => {
  const content = StrategyData;
  return (
    <div style={styles.marginTop}>
        <Grid container direction="row" justify="center" alignItems="flex-end" wrap="nowrap" spacing={2}>
            <Grid item xs={3}>
                <Typography variant="h4">Our Strategy</Typography>
            </Grid> <br/>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-end" wrap="nowrap" spacing={2}>
            <Grid item xs={8}>
            <Typography variant="h5">{content.heading}</Typography>
            </Grid>
        </Grid>{" "}
        <br />
        <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap" spacing={2}>
            <Grid item xs={8}>
            <Typography variant="h5">{content.subheading}</Typography>
            </Grid>
        </Grid>
        <Grid container style={styles.parentRoot} spacing={2}>
            <Grid item xs={12}>
            <Grid container justify="space-around" spacing={4}>
                {content.cards.map((data) => {
                return (
                    <Grid key={data.id} item>
                    <Card style={styles.cardRoot}>
                        <CardHeader title={data.heading} style={{color:'white'}}/>
                        <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            <label style={styles.subHeading}>
                            {data.subheading}
                            </label>
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
};

export default function OurStrategy() {
  return (
    <div>
      <Grid container style={styles.imagePosition}>
        <video
          style={styles.imageStyle}
          controls={false}
          autoplay="true"
          loop={true}
          muted={true}
        >
          <source src={`${BASE_URL}/strategy_tyox5d`} type="video/mp4" />
        </video>
      </Grid>
      <Grid container justify="center" style={styles.strategyPos}>
        <StrategyCard />
      </Grid>
    </div>
  );
};
