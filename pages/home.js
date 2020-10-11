import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/home.module.scss';
import NavBar from '../src/component/nav-bar';
import TagLine from '../src/component/HomeComponent/TagLine/tag-line';
import Statistics from '../src/component/HomeComponent/Statistics/statistics';
import OurClients from '../src/component/HomeComponent/OurClients/clients';
import HowWeServe from '../src/component/HomeComponent/HowWeServe/HowWeServe';
import OurPurpose from '../src/component/HomeComponent/OurPurpose/purpose';
import OurCapabilities from '../src/component/HomeComponent/Capabilities/capabilities';
// import Testimonial from '../src/component/HomeComponent/Testimonial/testimonial';

import PreFooter from '../src/component/Footer/pre-footer';
import Footer from '../src/component/Footer/footer';

import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

function HomePage() {
    const BASE_URL = "https://res.cloudinary.com/pushpcloud/image/upload";

    return (
        <div>
            {/* Includes Main Image with NavBar and TagLine */}
            <Container disableGutters={true} maxWidth={false}>
                <Grid item xs className={styles.imagePosition}>
                    <Paper elevation={3}>
                        <img src={`${BASE_URL}/smart-city/img-1_udpav4`} alt="image" className={styles.imageStyle} />
                    </Paper>
                </Grid>
                <Grid item md={12} className={styles.navBarPosition}>
                    <NavBar />
                </Grid>
                <Grid container justify="flex-end" className={styles.tagLinePosition}>
                    <TagLine />
                </Grid>
            </Container>

            <ParallaxProvider>
                <Container className={styles.benchmarking}>
                    <Parallax className="custom-class" x={[-5, 5]} y={[-20, 20]} tagOuter="figure">
                        {/* Includes Information ON Basic Statistics */}
                        <Grid container direction="row" justify="center" alignItems="center">
                            <h2>Our BenchMarkings</h2>
                        </Grid>
                        <Grid>
                            <Statistics />
                        </Grid>
                    </Parallax>
                </Container>

                <Container className={styles.marginTop}>
                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                        {/* Who we Serve */}
                        <Grid container direction="row" justify="center" alignItems="center">
                            <h2>Who We Serve</h2>
                        </Grid>
                        <Grid>
                            <OurClients />
                        </Grid>
                    </Parallax>
                </Container>

                <Container className={styles.marginTop}>
                    <Parallax className="custom-class" x={[-5, 5]} y={[-20, 20]} tagOuter="figure">
                        {/* Who we Serve */}
                        <Grid container direction="row" justify="center" alignItems="center">
                            <h2>How We Serve</h2>
                        </Grid>
                        <Grid>
                            <HowWeServe />
                        </Grid>
                    </Parallax>
                </Container>

                <Container className={styles.marginTop}>
                    {/* Our Purpose */}
                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <h2>Our Purpose</h2>
                    </Grid>
                    <Grid>
                        <OurPurpose />
                    </Grid>
                    </Parallax>
                </Container>

                <Container className={styles.marginTop}>
                    {/* Our Capabilities */}
                    <Parallax className="custom-class" x={[-5, 5]} y={[-20, 20]} tagOuter="figure">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <h2>Our Capabilities</h2>
                    </Grid>
                    <Grid>
                        <OurCapabilities />
                    </Grid>
                    </Parallax>
                </Container>

                {/* <Container className={styles.marginTop}>
                    <Parallax className="custom-class" x={[-5, 5]} y={[-20, 20]} tagOuter="figure">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <h2>Our Testimonail</h2>
                    </Grid>
                    <Grid>
                        <Testimonial />
                    </Grid>
                    </Parallax>
                </Container> */}
            </ParallaxProvider>

            <br/><br/><br/>
            <Container disableGutters={true} maxWidth={false} className={styles.footer}>
                <Grid item xs className={styles.footerImagePosition}>
                    <PreFooter />
                </Grid>
                <Grid item md={12} className={styles.footer}>
                    <Footer />
                </Grid>
            </Container>

        </div>
    )
}

export default HomePage;