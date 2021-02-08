import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";

import { OtherServices } from "../../../src/utils/MenuItems/Services/others";

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
    maxWidth: "700px",
    height: "300px",
  },
  marginLeft: {
    marginLeft: "-20px",
  },
};

const InformationCommunicationTechnology = () => {
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
            Other Major Services
          </Typography>
        </Grid>
      </Container>

      <Container disableGutters={true} maxWidth="false">
        {OtherServices.map((data) => {
          return (
            <Grid container key={data.id}>
              <Grid item md={12} style={style.margin}>
                <Typography
                  align="left"
                  display="initial"
                  variant="h5"
                  style={style.headingTextColor}
                >
                  {data.heading}
                </Typography>
                <Typography
                  align="left"
                  display="initial"
                  variant="h6"
                >
                  {data.subHeading}
                </Typography>
              </Grid>
              <Grid item md={6} style={{marginLeft:'60px'}}>
                <Typography>
                  <ul style={style.marginLeft}>
                    {data.description.map((desc) => {
                      return <li key={desc.id}>{desc.title}</li>;
                    })}
                  </ul>
                </Typography>
              </Grid>

              <Grid item md={4}>
                <img
                  src={data.bannerImage}
                  alt="cover_image"
                  className={styles.fullScreenWidth}
                  style={style.imageWidth}
                />
              </Grid>
            </Grid>
          );
        })}
      </Container>

      <Container disableGutters={true} maxWidth="false" style={style.topMargin}>
        <Grid item md>
          <Footer />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default InformationCommunicationTechnology;
