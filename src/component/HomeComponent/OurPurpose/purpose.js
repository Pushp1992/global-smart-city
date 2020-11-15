import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Purpose } from "../../../utils/ourPurpose";

const styles = {
  cardRoot: {
    maxWidth: 345,
  },
  parentRoot: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  prefix: {
    color: "#37abab",
    fontWeight: "bold",
  },
  subHeading: {
    color: "teal",
  },
  subheading1: {
    fontSize: "medium",
  },
  headingStyle: {
    marginLeft: "6.3%",
  },
};

export default function OurPurpose() {
  const content = Purpose;
  return (
    <Grid container style={styles.parentRoot} spacing={2}>
      <div style={styles.headingStyle}>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="flex-start"
          spacing={2}
        >
          <Grid item md>
            <Typography variant="h5">{content.heading}</Typography>
          </Grid>
        </Grid>{" "}
        <br />
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="flex-start"
          spacing={2}
        >
          <Grid item md>
            <Typography variant="h6">
              <span style={styles.prefix}>{content.prefix}</span>
              <span style={styles.subheading1}>{content.subheading}</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing={2}>
          {content.purpose.map((data) => {
            return (
              <Grid key={data.id} item>
                <Card style={styles.cardRoot}>
                  <CardHeader title={data.tagLine} />
                  <CardMedia
                    style={styles.media}
                    image={data.imageUrl}
                    title={data.tagLine}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
  );
}
