import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";

import { MasterPlan } from "../../../src/utils/MenuItems/Services/city-masterplan";

const style = {
  margin: {
    margin: "60px",
  },
  topMargin: {
    marginTop: "40px",
  },
  headingTextColor: {
    color: "teal",
    fontWeight: "600 !important",
  },
  imageWidth: {
    maxWidth: "700px"
  },
  marginLeft: {
    marginLeft: "-20px",
  },
};

const SmartCityMasterPlanning = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md className={styles.navBarPosition}>
          <NavBar />
        </Grid>

        <Grid item md style={style.margin}>
          <Typography
            align="left"
            display="initial"
            variant="h5"
            style={style.headingTextColor}
          >
            {MasterPlan.firstSection.title}
          </Typography>
          <Typography
            align="left"
            display="initial"
            variant="h6"
            style={style.topMargin}
          >
            {MasterPlan.firstSection.description}
          </Typography>
        </Grid>
      </Container>

      <Container disableGutters={false} maxWidth="false">
        <Grid container>
          <Grid item md={6}>
            <Timeline style={{ marginLeft: "12px" }}>
              <TimelineItem className="customStyle">
                <TimelineSeparator className="test-3">
                  <TimelineDot style={style.headingTextColor}>
                    <LocationCityIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={style.headingTextColor}
                  >
                    {MasterPlan.secondSection.title}
                  </Typography>
                  <Typography>{MasterPlan.secondSection.description}</Typography>
                </TimelineContent>
              </TimelineItem>{" "}
              <br />
              <br />
              <TimelineItem className="customStyle">
                <TimelineSeparator>
                  <TimelineDot style={style.headingTextColor}>
                    <LocationCityIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={style.headingTextColor}
                  >
                    {MasterPlan.thirdSection.title}
                  </Typography>
                  <Typography>
                    <ul style={style.marginLeft}>
                      {MasterPlan.thirdSection.description.map((item) => {
                        return <li key={item.id}>{item.title}</li>;
                      })}
                    </ul>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>

          <Grid item md={6}>
            <img
              src={MasterPlan.bannerImage}
              alt="cover_image"
              className={styles.fullScreenWidth}
              style={style.imageWidth}
            />
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

export default SmartCityMasterPlanning;
