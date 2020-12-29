import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";

import { Goals } from "../../../src/utils/MenuItems/about-company/goals";

const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/AboutCompany/goals";

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
};

const CoverCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.coverCardStyle}>
          <CardHeader
            title="To stay ahead of the crowd"
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>
                SDP strives to complement the resilience &amp; sustainability.
              </label>
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
            src={`${BASE_URL}/Our-Goals_sfr6ve`}
            alt="cover_image"
            //style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>

        <Grid
          wrap="nowrap"
          spacing={2}
          direction="row"
          style={style.margin}
          className="ourGoals"
        >
          <div style={style.padding}>
            <p>
              <label>{Goals.paragraph1}</label>
            </p>
            <p>
              <div>{Goals.paragraph2}</div>
            </p>
            <p>
              <div>{Goals.paragraph3}</div>
            </p>
          </div>
        </Grid>
      </Container>

      <Container disableGutters={true} maxWidth="false">
        <Grid item md>
          <Footer />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default OurGoal;
