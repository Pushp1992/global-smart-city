import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const fbImg = "../images/socialMedia/fb.png";
const instaImg = "../images/socialMedia/insta.png";
const wappImg = "../images/socialMedia/wapp.png";
const linkedinImg = "../images/socialMedia/linkedin.png";
const tweeterImg = "../images/socialMedia/tweet.png";

const styles = {
  root: {
    display: "flex",
  },
  imgPos: {
    display: "inline-block !important",
  },
  footer: {
    backgroundColor: "black",
    color: "red",
    height: "25rem",
  },
  upperFooter: {
    color: "teal",
  },
  lowerFooter: {
    marginTop: "10rem",
    color: "aqua",
  },
  borderStyle: {
    border: "revert",
    marginTop: "2rem",
  },
  textField: {
    width: "20rem",
    padding: "10px",
    backgroundColor: "smoke-white",
    display: "inline-flex !important",
    marginRight: "1rem !important",
    "&:focus": {
      backgroundColor: "white",
    },
  },
  heading: {
    marginLeft: "42px !important",
    color: "antiquewhite",
  },
};

export default function Footer() {
  return (
    <Container disableGutters={true} maxWidth={false} style={styles.footer}>
      <Grid
        direction="row"
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={styles.upperFooter}
      >
        <Grid item xs={4}>
          <div style={styles.heading}>
            <h3>Subscribe to Our Newsletter</h3>
            <input
              type="text"
              name="email"
              placeholder="enter your email..."
              style={styles.textField}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <h4 style={styles.heading}>SOLUTIONS</h4>
          <ul>
            <li>Technology Procurement</li>
            <li>Innovation Labs &nbsp; Disctricts</li>
            <li>Regional &nbsp; Theme based Networks</li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <h4 style={styles.heading}>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>In the Press</li>
            <li>Resources</li>
            <li>Careers</li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <h4 style={styles.heading}>We are On</h4>
          <ul>
            <li>Social Media</li>
            <li>Google Map</li>
            <li>Gmail</li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <h4 style={styles.heading}>CONTACT US</h4>
          <ul>
            <li>Social Media</li>
            <li>Google Map</li>
            <li>Gmail</li>
          </ul>
        </Grid>
      </Grid>
      {/* <Divider style={styles.borderStyle}/> */}
      <Grid
        direction="row"
        container
        justify="center"
        alignItems="flex-end"
        spacing={3}
        style={styles.lowerFooter}
      >
        <Grid item xs={3}>
          <div style={styles.root}>
            <Avatar alt="facebook" src={fbImg} />
            <Avatar alt="instagram" src={instaImg} />
            <Avatar alt="whatsapp" src={wappImg} />
            <Avatar alt="tweeter" src={tweeterImg} />
            <Avatar alt="linkedin" src={linkedinImg} />
          </div>
        </Grid>
        <Grid item xs={4}>
          © 2020 Smart Development Professionals Inc. All Rights Reserved
        </Grid>
        <Grid item xs={2}>
          Terms of Service
        </Grid>
        <Grid item xs={2}>
          Privacy Policy
        </Grid>
      </Grid>
    </Container>
  );
}
