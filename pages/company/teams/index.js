import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";

import { TeamAndLeaderShip } from "../../../src/utils/MenuItems/about-company/team";

const style = {
  margin: {
    margin: "60px",
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
  },
  teamHierarchy: {
    color: "teal",
    fontWeight: "600",
    marginLeft: "8%",
    marginBottom: "2rem",
  },
  employeeName: {
    padding: 20,
    backgroundColor: "teal",
    fontSize: "1.3rem",
    fontFamily: "auto",
    color: "white !important",
  },
  employeeInfo: {
    fontFamily: "auto",
    marginTop: "20px",
  },
};

const CoverCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.coverCardStyle}>
          <CardHeader
            title={TeamAndLeaderShip.bannerHeading}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{TeamAndLeaderShip.bannerSubHeading}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const OurTeam = () => {
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
            Team and Leadership
          </Typography>
        </Grid>

        <Grid item md>
          <img
            src={TeamAndLeaderShip.bannerImage}
            alt="cover_image"
            //style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>

        <Grid item md style={style.margin}>
          <Typography>
            <label>{TeamAndLeaderShip.mainContent.prefix}</label>
            <label>{TeamAndLeaderShip.mainContent.paraGraph1}</label>
          </Typography>{" "}
          <br />
          <Typography>
            <label>{TeamAndLeaderShip.mainContent.paraGraph2}</label>
          </Typography>
        </Grid>

        <Grid item md align="center" style={style.topMargin}>
          <img
            src={TeamAndLeaderShip.mainContent.contentImage}
            alt="main_content_image"
            className={styles.deviceSpecificWidth}
          />
        </Grid>
      </Container>

      <Container
        disableGutters={false}
        maxWidth="false"
        style={style.topMargin}
        className="ourTeam"
      >
        <Grid item md>
          <Paper elevation={1}>
            {TeamAndLeaderShip.team.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid container direction="row" justify="center" md={3}>
                    <Typography
                      align="left"
                      display="initial"
                      variant="h5"
                      style={style.teamHierarchy}
                    >
                      {item.heading}
                    </Typography>
                  </Grid>
                  {item.people.map((subItem, index) => {
                    return (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        key={index}
                      >
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
                          <Grid item md={2}>
                            <img src={subItem.avatar} alt="leader_photo" />
                          </Grid>

                          <Grid
                            item
                            md={8}
                            align="center"
                            style={{ color: "white" }}
                          >
                            <Grid item md style={style.employeeName}>
                              <Typography variant="h6">{subItem.name}</Typography>
                              <Typography variant="subtitle1">{subItem.designation}</Typography>
                              <Typography variant="subtitle2"> {subItem.company}</Typography>
                              <Typography variant="subtitle2">{subItem.role}</Typography>
                              <Typography variant="subtitle2">
                                Email:<u>{subItem.email}</u>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={10} zeroMinWidth wrap="noWrap">
                          <Typography style={style.employeeInfo}>
                            {subItem.details}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </Paper>
        </Grid>

        <Grid container md style={style.topMargin}>
          <Grid item style={style.topMargin}>
            <div>
              <img
                src={TeamAndLeaderShip.extraInfo.infoImage1}
                alt="main_content_image"
                className={styles.deviceSpecificWidth}
                //style={{ width: "700px" }}
              />
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            md={4}
            justify="center"
            alignItems="center"
          >
            <div>
              <img
                src={TeamAndLeaderShip.extraInfo.infoImage2}
                alt="main_content_image"
                className={styles.deviceSpecificWidth}
                style={{ width: "300px" }}
              />
            </div>
            <div style={{ alignSelf: "flex-end", marginLeft: "5rem" }}>
              <Typography variant="h5" component="h2">
                <label style={{ fontFamily: "auto" }}>
                  {TeamAndLeaderShip.extraInfo.infoData2}
                </label>
              </Typography>
            </div>
          </Grid>
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

export default OurTeam;
