import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/home.module.scss';
import NavBar from '../src/component/nav-bar';
import TagLine from '../src/component/HomeComponent/TagLine/tag-line';
import {ValueProposition} from '../src/component/HomeComponent/Statistics/statistics';
import OurClients from '../src/component/HomeComponent/OurClients/clients';
import HowWeServe from '../src/component/HomeComponent/HowWeServe/HowWeServe';
import OurStrategy from '../src/component/HomeComponent/Strategy/strategy';
import OurPurpose from '../src/component/HomeComponent/OurPurpose/purpose';
import OurCapabilities from '../src/component/HomeComponent/Capabilities/capabilities';
import Footer from '../src/component/Footer/footer';

function HomePage() {
    const BASE_URL = "https://res.cloudinary.com/pushpcloud/video/upload/v1604220257";

    return (
        <div>
            {/* Includes Main Image with NavBar and TagLine */}
            <Container disableGutters={true} maxWidth={false}>
            <Grid item md className={styles.navBarPosition}>
                <NavBar />
            </Grid>
            </Container>

            <Container disableGutters={true} maxWidth={false}>
                <Grid style={{width: '100%'}} item xs className={styles.imagePosition}>
                    <Paper elevation={3}>
                        <video className={styles.imageStyle} controls={false} autoplay="true" loop={true} muted={true}>
                            <source src={`${BASE_URL}/smart-city/intro-video_hwhsp3`} type="video/mp4"/>
                        </video>
                    </Paper>
                </Grid>
                <Grid container direction="column" justify="flex-end" alignItems="center" className={styles.tagLinePosition}>
                    <TagLine />
                </Grid>
            </Container>

            <Container maxWidth={false} style={{marginTop: '25rem'}}>
                {/* Includes Information ON Basic Statistics */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Our Unique Value Propositions</h2>
                </Grid>
                <Grid>
                    <ValueProposition />
                </Grid>
            </Container>

            <Container maxWidth={false} className={styles.marginTop}>
                {/* Who we Serve */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Whom We Can Help</h2>
                </Grid>
                <Grid>
                    <OurClients />
                </Grid>
            </Container>

            <Container maxWidth={false} className={styles.marginTop}>
                {/* Who we Serve */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>How We Can Help</h2>
                </Grid>
                <Grid>
                    <HowWeServe />
                </Grid>
            </Container>


            <Container disableGutters={true} maxWidth={false} className={styles.marginTop}>
                <Grid>
                    {/* Our Strategy */}
                    <OurStrategy />
                </Grid>
            </Container> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Container maxWidth={false} style={{marginTop: '10rem'}}>
                {/* Our Purpose */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Our Purpose</h2>
                </Grid>
                <Grid>
                    <OurPurpose />
                </Grid>
            </Container>


            <Container maxWidth={false} className={styles.marginTop}>
                {/* Our Capabilities */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Our Core Capabilities</h2>
                </Grid>
                <Grid>
                    <OurCapabilities />
                </Grid>
            </Container>

            <Container disableGutters={true} maxWidth={false} className={styles.marginTop}>
                <Grid item md={12}>
                    <Footer />
                </Grid>
            </Container>

        </div>
    )
}

export default HomePage;