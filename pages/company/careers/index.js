import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";

import Box from "@material-ui/core/Box";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";

import { CompanyCareer } from "../../../src/utils/MenuItems/about-company/careers";

const style = {
  margin: {
    margin: '60px'
  },
  topMargin: {
    marginTop: "40px",
  },
  padding: {
    padding: "15px",
  },
  headingTextColor: {
    color: "teal",
    fontWeight: "600 !important",
    fontWeight: 'bolder'
  },
  buttonMargin: {
    margin: "40px",
  },
  progressBarStyle: {
    backgroundColor: "black",
  },
  buttonStyle: {
    backgroundColor: "#00CED1",
    width: "15rem",
    height: "4rem",
    fontSize: "20px",
    fontWeight: "700",
  },
  applyText: {
    fontWeight: "bold",
    marginTop: "30px",
  },
  cardHeading: {
    color: "teal",
    fontSize: "2rem",
  },
  cardSubHeading: {
    fontFamily: "serif",
  },
  card: {
    cover: {
      width: "20rem",
      height: "20rem",
      marginTop: "20px",
    },
    root: {
      display: "inline-flex",
    },
  },
};

const CoverCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.coverCardStyle}>
          <CardHeader
            title={CompanyCareer.bannerHeading}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{CompanyCareer.bannerSubHeading}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const OurGoal = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md className={styles.navBarPosition}>
          <NavBar />
        </Grid>

        <Grid item md style={style.topMargin}>
          <CoverCard />
        </Grid>

        <Grid item md style={style.margin}>
          <Typography
            align="left"
            display="initial"
            variant="h5"
            style={style.headingTextColor}
          >
            Our Goals
          </Typography>
        </Grid>

        <Grid item md>
          <img
            src={CompanyCareer.bannerImage}
            alt="cover_image"
            //style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>

        <Grid item md style={style.margin}>
          <div style={style.padding}>
            <Typography>{CompanyCareer.mainContent}</Typography>
          </div>
        </Grid>
      </Container>

      <Container
        disableGutters={false}
        maxWidth="false"
        className="test me"
      >
        <Grid item md align="center">
          {CompanyCareer.cards.map((item, index) => {
            return (
              <Grid key={index} item md={6} style={style.topMargin} align="left">
                <Card className={styles.careerCard}>
                  <div style={style.card.media}>
                    <CardMedia
                      style={style.card.cover}
                      image={item.cardImage}
                      title={item.cardHeading}
                    />
                  </div>

                  <div>
                    <CardContent style={style.topMargin}>
                      <Typography style={style.cardHeading}>
                        {item.cardHeading}
                      </Typography>
                      <Typography>
                        <label style={style.cardSubHeading}>
                          {item.cardSubHeading}
                        </label>
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container disableGutters={true} maxWidth="true" style={style.topMargin}>
        <Grid item md style={style.topMargin} align="center">
          <LinearProgress style={style.progressBarStyle} />
          <div style={style.buttonMargin}>
            <Button variant="contained" style={style.buttonStyle}>
              {" "}
              Apply now
            </Button>
            <Typography style={style.applyText}>
              Search Roles, Apply or Continue an Application
            </Typography>
            <Typography>
              Mail your CV to {" "} <u>careers@sdpgroups.com</u>
            </Typography>
          </div>
          <LinearProgress style={style.progressBarStyle} />
        </Grid>
      </Container>

      <Container disableGutters={true} maxWidth="false" style={style.topMargin}>
        <Grid item md>
          <Footer />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default OurGoal;
