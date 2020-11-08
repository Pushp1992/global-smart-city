import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Capabilities } from "../../../utils/capabilities";

import {Purpose} from '../../../utils/ourPurpose';

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
    width: '30rem'
  },
  button: {
    marginLeft: 40,
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
