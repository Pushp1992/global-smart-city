import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from '../src/component/nav-bar';
import TagLine from '../src/component/HomeComponent/TagLine/tag-line';
import {ValueProposition} from '../src/component/HomeComponent/Statistics/statistics';
import OurClients from '../src/component/HomeComponent/OurClients/clients';
import HowWeServe from '../src/component/HomeComponent/HowWeServe/HowWeServe';
import OurStrategy from '../src/component/HomeComponent/Strategy/strategy';
import OurPurpose from '../src/component/HomeComponent/OurPurpose/purpose';
import OurCapabilities from '../src/component/HomeComponent/Capabilities/capabilities';
import Footer from '../src/component/Footer/footer';

import IntroVideo from '../src/component/HomeComponent/IntroVideo/IntroVideo';

import styles from '../styles/home.module.scss';

function HomePage() {
    const BASE_URL = "https://res.cloudinary.com/pushpcloud/video/upload/c_scale/v1604220257";

    return (
        <div>
            {/* Includes Main Image with NavBar and TagLine */}
            <Container disableGutters={true} maxWidth="false">
            <Grid item md className={styles.navBarPosition}>
                <NavBar />
            </Grid>
            </Container>

            <Container disableGutters={true} maxWidth="false">
                <Grid item md>
                    <IntroVideo />
                </Grid>
            </Container>

            <Container maxWidth="false" className={styles.marginTop}>
                {/* Includes Information ON Basic Statistics */}
                <Grid container direction="row" justify="center" alignItems="center" className={styles.headingImage}>
                    <h1 className={styles.heading}>What set us apart?</h1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <ValueProposition />
                </Grid>
            </Container>

            <Container maxWidth="false" className={styles.marginTop}>
                {/* Who we Serve */}
                <Grid container direction="row" justify="center" alignItems="center" className={styles.headingImage}>
                    <h1 className={styles.heading}>Whom We Can Help</h1>
                </Grid>
                <Grid>
                    <OurClients />
                </Grid>
            </Container>

            <Container maxWidth="false" className={styles.marginTop}>
                {/* Who we Serve */}
                <Grid container direction="row" justify="center" alignItems="center" className={styles.headingImage}>
                    <h1 className={styles.heading}>How We Can Help</h1>
                </Grid>
                <Grid>
                    <HowWeServe />
                </Grid>
            </Container>

            <Container disableGutters={true} maxWidth="false" className={styles.marginTop}>
                <Grid item md>
                    {/* Our Strategy */}
                    <OurStrategy />
                </Grid>
            </Container> 

            <Container maxWidth="false" className={styles.marginTop}>
                {/* Our Purpose */}
                <Grid container direction="row" justify="center" alignItems="center" className={styles.headingImage}>
                    <h1 className={styles.heading}>Our Purpose</h1>
                </Grid>
                <Grid>
                    <OurPurpose />
                </Grid>
            </Container>

            <Container maxWidth="false" className={styles.marginTop}>
                {/* Our Capabilities */}
                <Grid container direction="row" justify="center" alignItems="center" className={styles.headingImage}>
                    <h1 className={styles.heading}>Our Core Capabilities</h1>
                </Grid>
                <Grid>
                    <OurCapabilities />
                </Grid>
            </Container>

            <Container disableGutters={true} maxWidth="false" className={styles.marginTop}>
                <Grid item md>
                    <Footer />
                </Grid>
            </Container>
        </div>
    )
}

export default HomePage;