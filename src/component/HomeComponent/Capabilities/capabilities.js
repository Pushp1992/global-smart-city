import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Capabilities } from "../../../utils/capabilities";

import CardHeader from "@material-ui/core/CardHeader";

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
    marginTop: "2rem",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: '30rem'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
  button: {
    margin: 2,
    backgroundColor: 'teal'
  },
};

export default function OurCapabilities() {
  const content = Purpose;
  return (
    <div>
      <Grid container style={styles.parentRoot} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-around" spacing={2}>
            {Capabilities.map((data) => {
              return (
                <Grid key={data.id} item>
                  <Card style={styles.cardRoot}>
                    <CardMedia
                      style={styles.media}
                      image={data.imageUrl}
                      title={data.tagLine}
                    />
                    <CardContent>
                    <Grid container spacing={3} direction="row">
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary" style={styles.button}>{data.heading}</Button>
                      </Grid>
                    </Grid>
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
