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
    color: "white",
    maxWidth: 345,
    backgroundColor: "black",
  },
  subHeading: {
    color: "white",
  },
  videoPosition: {
    position: "relative",
    width: "100%",
  },
  strategyPos: {
    opacity: "0.7",
    position: "absolute",
  },
  textMargin: {
    marginTop: "5%",
  },
};

const StrategyCard = () => {
  const content = StrategyData;
  return (
    <Grid container className="strategyContainer" alignItems="stretch">
      <Grid container justify="center" style={styles.textMargin}>
        <Typography variant="h4">Our Strategy</Typography>
      </Grid>
      <Grid container justify="center" style={styles.textMargin}>
        <Typography variant="h4" className="strategyData">
          {content.heading}
        </Typography>
      </Grid>
      <Grid container justify="center" style={styles.textMargin}>
        <Typography variant="h4" className="strategyData">
          {content.subheading}
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-around"
        spacing={2}
        style={styles.textMargin}
      >
        {content.cards.map((data) => {
          return (
            <Grid key={data.id} item>
              <Card style={styles.cardRoot}>
                <CardHeader title={data.heading} style={{ color: "teal" }} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <label style={styles.subHeading}>{data.subheading}</label>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default function OurStrategy() {
  return (
    <Grid container direction="row">
      <Grid item md className="strategyVideo">
        <video
          style={styles.videoPosition}
          controls={false}
          autoplay="true"
          loop={true}
          muted={true}
        >
          <source src={`${BASE_URL}/strategy_tyox5d`} type="video/mp4" />
        </video>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.strategyPos}
      >
        <Grid item md>
          <StrategyCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
