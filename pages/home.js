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

            <Container className={styles.section2}>
                {/* Includes Information ON Basic Statistics */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Our BenchMarkings</h2>
                </Grid>
                <Grid>
                    <Statistics />
                </Grid>
            </Container>

            <Container className={styles.section3}>
                {/* Who we Serve */}
                <Grid container direction="row" justify="center" alignItems="center">
                    <h2>Who We Serve</h2>
                </Grid>
                <Grid>
                    <OurClients />
                </Grid>
            </Container>

        </div>
    )
}

export default HomePage;