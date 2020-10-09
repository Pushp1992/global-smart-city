import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const fbImg = "../images/socialMedia/fb.png";
const instaImg = "../images/socialMedia/insta.png";
const wappImg = "../images/socialMedia/wapp.png";
const linkedinImg = "../images/socialMedia/linkedin.png";
const tweeterImg = "../images/socialMedia/tweet.png";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     lowerFooter: {
//         backgroundColor: 'black',
//         color: 'white'
//     },
//     imgPos: {
//         display: 'inline-block !important'
//     }
//   }));

const styles = {
    root: {
      display: 'flex',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //   },
    },
    lowerFooter: {
        backgroundColor: 'black',
        color: 'white'
    },
    imgPos: {
        display: 'inline-block !important'
    }
  };

export default function Footer() {
    // const classes = useStyles();
    return (
        <Container disableGutters={true} maxWidth={false}>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={4}>
                    <h3>Subscribe to Our Newsletter</h3>
                </Grid>
                <Grid item xs={2}>
                    <h4>SOLUTIONS</h4>
                    <ul>
                        <li>Technology Procurement</li>
                        <li>Innovation Labs &nbsp; Disctricts</li>
                        <li>Regional &nbsp; Theme based Networks</li>
                    </ul>
                </Grid>
                <Grid item xs={2}>
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About</li>
                        <li>In the Press</li>
                        <li>Resources</li>
                        <li>Careers</li>
                    </ul>
                </Grid>
                <Grid item xs={2}>
                    <h4>We are On</h4>
                    <ul>
                        <li>Social Media</li>
                        <li>Google Map</li>
                        <li>Gmail</li>
                    </ul>
                </Grid>
                <Grid item xs={2}>
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>Social Media</li>
                        <li>Google Map</li>
                        <li>Gmail</li>
                    </ul>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center" alignItems="center" style={styles.lowerFooter}>
                <Grid item xs={3}>
                <div style={styles.root}>
                    <Avatar alt="facebook" src={fbImg} />
                    <Avatar alt="instagram" src={instaImg} />
                    <Avatar alt="whatsapp" src={wappImg} />
                    <Avatar alt="tweeter" src={tweeterImg} />
                    <Avatar alt="linkedin" src={linkedinImg} />
                </div>
                </Grid>
                <Grid item xs={3}>
                    © 2020 Smart Development Professionals Inc.  All Rights Reserved
                </Grid>
                <Grid item xs={2}>
                    Terms of Service
                </Grid>
                <Grid item xs={2}>
                    Privacy Policy
                </Grid>
            </Grid>
        </Container>
    )
}