import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

import Link from 'next/link'
import styles from '../../styles/nav-bar.module.scss';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        color: 'white !important',
        backgroundColor: 'transparent !important'
    },
    root: {
        flexGrow: 1,
    },
    margin: {
        marginRight: '1rem'
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        marginTop: '1rem'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.red,
            },
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
    },
}))(MenuItem);

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <div className={classes.paper}>Global Smart City</div>
                </Grid>
                {/* <Grid item md={6}>
                     <Paper className={classes.paper}>md=6</Paper>
                 </Grid> */}

                <Grid item lg={8}>
                    <Button variant="outlined" color="primary" aria-controls="customized-menu" aria-haspopup="true"
                        onClick={handleOpen} className={styles.margin}>
                        COMPANY
                    </Button>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="/about">
                                <a><ListItemText primary="About Us" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Our Goals" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Mission &amp; Values" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Resources" /></a>
                            </Link>
                        </StyledMenuItem>
                    </StyledMenu>

                    <Button variant="outlined" color="primary" aria-controls="customized-menu" aria-haspopup="true"
                        onClick={handleOpen} className={styles.margin}>
                        Services
                    </Button>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="City Benchmarking" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Digital Services" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Consulting &amp; Advisory" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="City Master Planning" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Technology Strategy" /></a>
                            </Link>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="">
                                <a><ListItemText primary="Check All services here" /></a>
                            </Link>
                        </StyledMenuItem>
                    </StyledMenu>

                    <Button variant="outlined" color="primary" className={styles.margin}>
                        <Link href="/about"><a>SOLUTIONS</a></Link>
                    </Button>
                    <Button variant="outlined" color="primary" className={styles.margin}>
                        <Link href="/about"><a>SOLUTIONS</a></Link>
                    </Button>
                    <Button variant="outlined" color="primary" className={styles.margin}>
                        <Link href="/about"><a>SOLUTIONS</a></Link>
                    </Button>
                    {/* <Button variant="outlined" color="primary" className={styles.margin}>
                        <Link href="/about"><a>SOLUTIONS</a></Link>
                    </Button>
                    <Button variant="outlined" color="primary" className={styles.margin}>
                        <Link href="/about"><a>SOLUTIONS</a></Link>
                    </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}



// <Grid container spacing={3}>
//     <Grid item md={3}>
//         <Paper className={classes.paper}>Global Smart City</Paper>
//     </Grid>
//     {/* <Grid item md={6}>
//                     <Paper className={classes.paper}>md=6</Paper>
//                 </Grid> */}

//     <Grid item xs>
//         <Paper className={classes.paper}>
//             <Button variant="outlined" color="primary">
//                 <Link href="/about"><a>SOLUTIONS</a></Link>
//             </Button>
//         </Paper>
//     </Grid>
//     <Grid item xs>
//         <Paper className={classes.paper}>
//             <div>
                // <Button variant="outlined" color="primary" aria-controls="customized-menu" aria-haspopup="true" onClick={handleOpen}>
                //     COMPANY
                //             </Button>
                // <StyledMenu id="customized-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                //     <StyledMenuItem>
                //         <ListItemIcon>
                //             <SendIcon fontSize="small" />
                //         </ListItemIcon>
                //         <ListItemText primary="About Us" />
                //     </StyledMenuItem>
                //     <StyledMenuItem>
                //         <ListItemIcon>
                //             <SendIcon fontSize="small" />
                //         </ListItemIcon>
                //         <ListItemText primary="What we do" />
                //     </StyledMenuItem>
                //     <StyledMenuItem>
                //         <ListItemIcon>
                //             <SendIcon fontSize="small" />
                //         </ListItemIcon>
                //         <ListItemText primary="What we serve" />
                //     </StyledMenuItem>
                // </StyledMenu>
//             </div>
//         </Paper>
//     </Grid>
//     <Grid item xs>
//         <Paper className={classes.paper}>
//             <Button variant="outlined" color="primary">
//                 <Link href="/about"><a>VENDORS</a></Link>
//             </Button>
//         </Paper>
//     </Grid>
//     <Grid item xs>
//         <Paper className={classes.paper}>
//             <Button variant="outlined" color="primary">
//                 <Link href="/about"><a>CONTACT</a></Link>
//             </Button>
//         </Paper>
//     </Grid>
//     <Grid item>
//         <Paper className={classes.paper}>
//             <Button variant="outlined" color="primary">
//                 <Link href="/about"><a>REQUEST a DEMO</a></Link>
//             </Button>
//         </Paper>
//     </Grid>
//     <Grid item xs>
//         <Paper className={classes.paper}>
//             <Button variant="outlined" color="primary">
//                 <Link href="/about"><a>LOGIN</a></Link>
//             </Button>
//         </Paper>
//     </Grid>

// </Grid>