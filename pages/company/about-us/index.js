import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import NavBar from "../../../src/component/nav-bar";
import Footer from "../../../src/component/Footer/footer";
import styles from "../../../styles/home.module.scss";
import {
  AboutCompany,
  StrategicPartner,
  StrategyCard,
  SecondCardContent,
  ThirdCardContent,
} from "../../../src/utils/MenuItems/about-company/about-us";

const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/AboutCompany/about-us";

const style = {
  topMargin: {
    marginTop: "40px",
  },
  leftMargin: {
    marginLeft: "10px",
  },
  headingTextColor: {
    color: "teal",
    fontWeight: "600 !important",
  },
  headingFontStyle: {
    fontFamily: "cursive",
  },
  fontWeight: {
    fontWeight: "700",
  },
  cardPosition: {
    backgroundColor: "black",
  },
  prefixStyle: {
    color: "teal",
    fontWeight: 700,
    fontFamily: "fantasy",
    fontSize: "xx-large",
  },
  card: {
    cover: {
      width: "70px",
      height: "100px",
      marginTop: "20px",
    },
    root: {
      display: "flex",
      backgroundColor: "ghostwhite",
    },
    media: {
      padding: "20px",
    },
  },
};

const CoverCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.coverCardStyle}>
          <CardHeader
            title="Difference We Create"
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>SDP Experts are very keen to reshape the future</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const SecondCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.secondCardStyle}>
          <CardHeader
            title={SecondCardContent.title}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{SecondCardContent.content}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const ThirdCard = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Grid item md>
        <Card className={styles.secondCardStyle}>
          <CardHeader
            title={ThirdCardContent.title}
            style={style.headingTextColor}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <label>{ThirdCardContent.content}</label>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const AboutUs = () => {
  return (
    <React.Fragment>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md className={styles.navBarPosition}>
          <NavBar />
        </Grid>

        <Grid item md style={style.topMargin}>
          <CoverCard />
        </Grid>

        <Grid item md style={style.topMargin}>
          <Typography
            align="left"
            display="initial"
            variant="h5"
            style={style.headingTextColor}
          >
            About us
          </Typography>
        </Grid>

        <Grid item md style={style.topMargin}>
          <img
            src={`${BASE_URL}/about-us-1_dgrdcz`}
            alt="cover_image"
            //style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>

        <Grid wrap="nowrap" spacing={2} style={style.topMargin} className="info">
          <div style={style.leftMargin}>
            <p>
              <label style={style.prefixStyle}>{AboutCompany.prefix}</label>
              <label>{AboutCompany.suffixFirst}</label>
            </p>
            <p>
              <div>{AboutCompany.suffixSecond}</div>
            </p>
            <p>
              <div>{AboutCompany.suffixThird}</div>
            </p>
          </div>
        </Grid>

        <Grid item md style={style.topMargin}>
          <div style={style.leftMargin}>
            <Typography>{StrategicPartner.heading}</Typography>
            <Typography>{StrategicPartner.body}</Typography>
          </div>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          spacing={2}
          style={style.topMargin}
        >
          {StrategyCard.card.map((item, index) => {
            return (
              <Grid key={index} item md={4}>
                <Card style={style.card.root}>
                  <div style={style.card.media}>
                    <CardMedia
                      style={style.card.cover}
                      image={item.image}
                      title={item.sector}
                    />
                    <div>
                      <b>{item.sector}</b>
                    </div>
                  </div>

                  <div>
                    <CardContent>
                      {item.list.map((item, index) => {
                        return (
                          <Typography key={index} variant="subtitle1">
                            <li>{item}</li>
                          </Typography>
                        );
                      })}
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md style={style.topMargin}>
          <SecondCard />
        </Grid>
        <Grid item md style={style.topMargin}>
          <img
            src={`${BASE_URL}/about-us-5_jtbm1n`}
            alt="cover_image"
            // style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>
      </Container>
      <Container disableGutters={true} maxWidth="false">
        <Grid item md style={style.topMargin}>
          <ThirdCard />
        </Grid>
        <Grid item md style={style.topMargin}>
          <img
            src={`${BASE_URL}/about-us-6_sazkds`}
            alt="cover_image"
            // style={{ width: "-webkit-fill-available" }}
            className={styles.fullScreenWidth}
          />
        </Grid>
      </Container>
      <Container
        disableGutters={true}
        maxWidth="false"
        style={style.topMargin}
      >
        <Grid item md>
          <Footer />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AboutUs;
