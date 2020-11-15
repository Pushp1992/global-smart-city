import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const fbImg = "../images/socialMedia/fb.png";
const instaImg = "../images/socialMedia/insta.png";
const wappImg = "../images/socialMedia/wapp.png";
const linkedinImg = "../images/socialMedia/linkedin.png";
const tweeterImg = "../images/socialMedia/tweet.png";

const styles = {
  root: {
    display: "flex",
    marginLeft: "42px !important",
  },
  imgPos: {
    display: "inline-block !important",
  },
  footer: {
    backgroundColor: "black",
    // color: "red",
    // height: "25rem",
  },
  upperFooter: {
    color: "teal",
  },
  lowerFooter: {
    // marginTop: "10rem",
    fontSize: '13px',
    color: "white",
  },
  borderStyle: {
    border: "revert",
    marginTop: "6rem",
  },
  textField: {
    width: "16rem",
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
    <Container disableGutters={true} maxWidth={false} 
    style={styles.footer}
    >
      <Grid
        direction="row"
        container
        justify="center"
        alignItems="flex-start"
        spacing={3}
        style={styles.upperFooter}
      >
        <Grid item md>
          <div 
          style={styles.heading}
          >
            <h4>Subscribe to Our Newsletter</h4>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              style={styles.textField}
            />
          </div>
        </Grid>
        <Grid item md>
          <h4 
          style={styles.heading}
          >Solutions</h4>
          <ul>
            <li>Technology Procurement</li>
            <li>Innovation Labs&nbsp;Districts</li>
            <li>Regional&nbsp;Theme based Networks</li>
          </ul>
        </Grid>
        <Grid item md>
          <h4 
          style={styles.heading}
          >Company</h4>
          <ul>
            <li>About</li>
            <li>In the Press</li>
            <li>Resources</li>
            <li>Careers</li>
          </ul>
        </Grid>
        <Grid item md>
          <h4 
          style={styles.heading}
          >We are On</h4>
          <ul>
            <li>Social Media</li>
            <li>Google Map</li>
          </ul>
        </Grid>
        <Grid item md>
          <h4 
          style={styles.heading}
          >Contact us</h4>
          <ul>
            <li>Smart Development Professionals (SDP) LLC</li>
            <li>112, Capitol trail Network, DE, US-19711</li>
            <li>Mob: +91-9508250394</li>
            <li>whatsApp: +91-8743841659</li>
            <li>info@sdpgroups.com</li>
            <li>www.sdpgroups.com</li>
          </ul>
        </Grid>
      </Grid>
      <Divider 
      style={styles.borderStyle}
      />
      <Grid
        direction="row"
        container
        justify="space-around"
        alignItems="center"
        spacing={1}
        style={styles.lowerFooter}
      >
        <Grid item md>
          <div 
          style={styles.root}
          >
            <a href="https://www.facebook.com/pg/Smart-Development-Professionals-LLC-102758108292688" target="_blank">
              <Avatar alt="facebook" src={fbImg} />
            </a>
            <a href="https://www.instagram.com/sdpgroups/" target="_blank">
              <Avatar alt="instagram" src={instaImg} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=918743841659" target="_blank">
              <Avatar alt="whatsapp" src={wappImg} />
            </a>
            <a href="https://twitter.com/SmartSdp" target="_blank">
              <Avatar alt="tweeter" src={tweeterImg} />
            </a>
            <a href="https://www.linkedin.com/company/smart-development-professionals/" target="_blank">
              <Avatar alt="linkedin" src={linkedinImg} style={{width:'30px', height:'30px', marginTop:'5px'}} />
            </a>
          </div>
        </Grid>
        <Grid item md>
          © 2020 Smart Development Professionals LLC. All Rights Reserved
        </Grid>
        <Grid item md>
          Terms of Service
        </Grid>
        <Grid item md>
          Privacy Policy
        </Grid>
      </Grid>
    </Container>
  );
}
