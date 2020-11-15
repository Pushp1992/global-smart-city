import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { HowWeServeData } from "../../../utils/howWeServe";

const styles = {
  root: {
    maxWidth: 345,
    fontSize: "10px",
  },
  parentRoot: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  header: {
    fontSize: "20px !imporatnt",
  },
  subheading: {
    color: "teal",
  },
};

export default function HowWeServe() {
  return (
    <Grid container style={styles.parentRoot} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing={2}>
          {HowWeServeData.map((data) => {
            return (
              <Grid key={data.id} item>
                <Card style={styles.root}>
                  <CardHeader title={data.heading} />
                  <CardMedia
                    style={styles.media}
                    image={data.image}
                    title={data.heading}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <label style={styles.subheading}>{data.subheading}</label>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
