import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

import Link from 'next/link'

const BASE_URL= "https://res.cloudinary.com/pushpcloud/image/upload/w_100,h_100,c_scale/v1604230842";

const styles = {
    buttonTheme: {
        marginRight: '1rem !important',
        backgroundColor: 'teal'
    },
    root: {
        flexGrow: 1,
    },
    textField: {
        width: '20rem',
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: '#79b3b3',
        display: 'inline-flex !important',
        '&:focus': {
            backgroundColor: 'white'
        }
    }
};

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={styles.root}>
            <Grid container spacing={3} alignItems="center">
                <Grid item md={1}>
                    <div>
                        <img src={`${BASE_URL}/smart-city/company-logo_qel7bw`} alt="logo" />
                    </div>
                </Grid>
                {/* <Grid item md={2}>
                    <input type="text" name="search" placeholder="Enter Search Value" style={styles.textField} />
                </Grid> */}
                <Grid item md={11}>
                    <Button variant="contained" color="primary" aria-controls="customized-menu" aria-haspopup="true"
                        onClick={handleOpen} style={styles.buttonTheme}>
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

                    <Button variant="contained" color="primary" aria-controls="customized-menu" aria-haspopup="true"
                        onClick={handleOpen} style={styles.buttonTheme}>
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

                    <Button variant="contained" color="primary" style={styles.buttonTheme}>
                        <Link href="/about"><a>INDUSTRIES</a></Link>
                    </Button>
                    <Button variant="contained" color="primary" style={styles.buttonTheme}>
                        <Link href="/about"><a>OBSERVATORY</a></Link>
                    </Button>
                    <Button variant="contained" color="primary" style={styles.buttonTheme}>
                        <Link href="/about"><a>LOGIN</a></Link>
                    </Button>

                        <input type="text" name="search" placeholder="Enter Search Value" style={styles.textField} />
      
                    {/* <Button variant="contained" color="primary" style={styles.buttonTheme}>
                        SEARCH
                    </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}