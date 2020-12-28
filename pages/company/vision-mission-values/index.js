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

import { CompanyVMV } from "../../../src/utils/MenuItems/about-company/vision";

const style = {
  cardRoot: {
    maxWidth: 445,
    // backgroundColor: "black",
  },
  cardText: {
    //   color: 'white',
    fontSize: "1.2rem",
    fontFamily: "auto",
  },
  topMargin: {
    marginTop: "40px",
  },
  padding: {
    padding: "15px",
  },
  headingTextColor: {
    color: "teal",
    fontWeight: "600",
  },
  teamHierarchy: {
    color: "teal",
    fontWeight: "600",
    marginLeft: "8%",
    marginBottom: "2rem",
  },
  employeeName: {
    backgroundColor: "teal",
    fontSize: "1.3rem",
    fontFamily: "auto",
    color: "white !important",
  },
  employeeExp: {
    backgroundColor: "#00BFFF",
    fontSize: "1.2rem",
    fontFamily: "auto",
    color: "whitesmoke !important",
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
            title={CompanyVMV.topBanner.bannerHeading}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{CompanyVMV.topBanner.bannerSubHeading}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const BottomCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.coverCardStyle}>
          <CardHeader
            title={CompanyVMV.bottomBanner.bannerHeading}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{CompanyVMV.bottomBanner.bannerSubHeading}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const CEOMessage = () => {
  return (
    <Container style={{backgroundColor: 'whitesmoke'}}>
      <Grid md={6} container justify="space-around">
        <Typography variant="h5" align="left" gutterBottom={true}>
          {CompanyVMV.ceoSection.subject}
        </Typography>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item md={8}>
          <Typography variant="subtitle1" align="left" gutterBottom={true}>
            {CompanyVMV.ceoSection.salutation}
          </Typography>

          <Typography variant="body1" align="left" gutterBottom={true}>
            {CompanyVMV.ceoSection.messageBody.map((message, index) => {
              return (
                <p
                  key={index}
                  style={{ wordBreak: "break-all", fontFamily: "auto" }}
                >
                  {message.paragraph}
                </p>
              );
            })}
          </Typography>
        </Grid>
        <Grid item md={2} style={style.topMargin}>
          <div>
            <img
              src={CompanyVMV.ceoSection.avatar}
              alt="cover_image"
              className={styles.fullScreenWidth}
            />
          </div>
          <Grid container justify="center" alignItems="center">
            <div>
              <Typography style={{ fontWeight: "700" }}>
                {CompanyVMV.ceoSection.name}
              </Typography>
              <Typography style={{ fontWeight: "700" }}>
                {CompanyVMV.ceoSection.designation}
              </Typography>
              <Typography style={{ fontWeight: "700", color: "#00CED1" }}>
                {CompanyVMV.ceoSection.company}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const CompanyVisionMissionValues = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md className={styles.navBarPosition}>
          <NavBar />
        </Grid>

        <Grid item md style={style.topMargin}>
          <Typography
            align="auto"
            display="initial"
            variant="h5"
            style={style.headingTextColor}
          >
            Vision, Mission &amp; Values
          </Typography>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          style={style.topMargin}
        >
          <img
            src={CompanyVMV.headerImage}
            alt="cover_image"
            className={styles.fullScreenWidth}
          />
        </Grid>

        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          spacing={2}
          style={style.topMargin}
        >
          {CompanyVMV.cards.map((item, index) => {
            return (
              <Grid key={index} item>
                <Card style={style.cardRoot}>
                  <CardHeader
                    title={item.tagLine}
                    style={style.headingTextColor}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      component="p"
                      style={style.cardText}
                    >
                      <label>{item.details}</label>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Grid item md>
          <CoverCard />
        </Grid>

        <Grid item md style={style.topMargin}>
          <img
            src={CompanyVMV.topBanner.bannerImage}
            alt="cover_image"
            className={styles.fullScreenWidth}
          />
        </Grid>
      </Container> <br/>

      <Grid item md style={style.topMargin}>
        <CEOMessage />
      </Grid>

      <Container disableGutters={true} maxWidth="false">
        <Grid item md>
          <BottomCard />
        </Grid>

        <Grid item md style={style.topMargin}>
          <img
            src={CompanyVMV.bottomBanner.bannerImage}
            alt="cover_image"
            className={styles.fullScreenWidth}
          />
        </Grid> <br/>
        <Grid container md={11} style={style.topMargin}>
          <Typography style={style.topMargin} gutterBottom={true}>
            {CompanyVMV.bottomBanner.content}
          </Typography>
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

export default CompanyVisionMissionValues;
