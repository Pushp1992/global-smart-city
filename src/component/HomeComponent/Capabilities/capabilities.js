import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Capabilities } from "../../../utils/capabilities";

const styles = {
  root: {
    flexGrow: 1,
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
};

export default function OurCapabilities() {
  return (
    <div style={styles.root}>
      <Grid container spacing={3}>
        {
            Capabilities.map((data) => {
            return (
                <Grid key={data.id} item xs={3}>
                <Card style={styles.cardRoot}>
                    <CardActionArea>
                    <CardMedia
                        style={styles.media}
                        image={data.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                        {data.heading}
                        </Typography>
                        <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        >
                       {/* {data.subheading} */}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            );
            })
        }
      </Grid>
    </div>
  );
}
