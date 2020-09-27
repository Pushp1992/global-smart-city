import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/home.module.scss';

import NavBar from '../src/component/nav-bar';
import TagLine from '../src/component/HomeComponent/tag-line';


function HomePage() {
    const BASE_URL = "https://res.cloudinary.com/pushpcloud/image/upload";

    return (
        <div>
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
        </div>
    )
}

export default HomePage;