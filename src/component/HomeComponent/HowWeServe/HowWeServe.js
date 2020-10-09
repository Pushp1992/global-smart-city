import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blueGrey, green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { HowWeServeData } from "../../../utils/howWeServe";
import { Bluetooth } from "@material-ui/icons";

const styles = {
  root: {
    maxWidth: 345,
  },
  parentRoot: {
    flexGrow: 1,
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
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
  likeBtn: {
    backgroundColor: red[500],
  }
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
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" style={styles.avatar}>
                        {data.avatar}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={data.heading}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    style={styles.media}
                    image={data.image}
                    title={data.heading}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.subheading}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton style={styles.likeBtn} aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
