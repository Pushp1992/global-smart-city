import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";

const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/w_100,h_100,c_scale/v1604230842";

const styles = {
  root: {
    flexGrow: 1,
  },
  textField: {
    width: "20rem",
    padding: "10px",
    backgroundColor: "smoke-white",
    display: "inline-flex !important",
    marginRight: "1rem !important",
    "&:select": {
      backgroundColor: "white",
    },
  },
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid white",
    marginTop: "1rem",
    backgroundColor: "teal",
    opacity: "0.5 !important",
    fontWeight: "bolder",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.red,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))(MenuItem);

export default function NavBar() {
  const [companyMenu, setCompanyMenu] = React.useState(null);
  const [serviceMenu, setServiceMenu] = React.useState(null);
  const [industryMenu, setIndustryMenu] = React.useState(null);

  const handleOpen = (event) => {
    event.preventDefault();
    event.persist();

    let target = event.currentTarget;

    if (target.name === "company") {
      setCompanyMenu(event.currentTarget);
    }
    if (target.name === "service") {
      setServiceMenu(event.currentTarget);
    }
    if (target.name === "industry") {
      setIndustryMenu(event.currentTarget);
    }
  };

  const handleClose = () => {
    setCompanyMenu(null);
    setServiceMenu(null);
    setIndustryMenu(null);
  };

  return (
    <Grid container direction="row" spacing={3} alignItems="center">
      <Grid item md={1}>
        <div>
          <img src={`${BASE_URL}/smart-city/company-logo_qel7bw`} alt="logo" />
        </div>
      </Grid>
      <Grid item md={11}>
        <Grid container direction="row" spacing={0} justify="flex-end">
          <Button
            variant="contained"
            name="company"
            color="primary"
            aria-haspopup="true"
            onClick={handleOpen}
            style={styles.buttonTheme}
            style={{margin:"1rem",backgroundColor:"teal",marginRight:'1px'}}
          >
            About Company
          </Button>
          <StyledMenu
            id="company"
            anchorEl={companyMenu}
            open={Boolean(companyMenu)}
            onClose={handleClose}
            keepMounted
          >
            <StyledMenuItem>
              <Link href="/about">
                <a>
                  <ListItemText primary="About" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Our Goals" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Mission &amp; Values" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Careers" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Team &amp; Leadership" />
                </a>
              </Link>
            </StyledMenuItem>
          </StyledMenu>

          <Button
            variant="contained"
            color="primary"
            name="service"
            aria-haspopup="true"
            onClick={handleOpen}
            style={{margin:"1rem",backgroundColor:"teal",marginRight:'1px'}}
          >
            Services
          </Button>
          <StyledMenu
            id="service"
            anchorEl={serviceMenu}
            open={Boolean(serviceMenu)}
            onClose={handleClose}
            keepMounted
          >
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="City Benchmarking" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Digital Services" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Consulting &amp; Advisory" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="City Master Planning" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Technology Strategy" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Check All services here" />
                </a>
              </Link>
            </StyledMenuItem>
          </StyledMenu>

          <Button
            variant="contained"
            color="primary"
            name="industry"
            aria-haspopup="true"
            onClick={handleOpen}
            style={{margin:"1rem",backgroundColor:"teal",marginRight:'1px'}}
          >
            <Link href="">
              <a>Industries</a>
            </Link>
          </Button>
          <StyledMenu
            id="industry"
            anchorEl={industryMenu}
            open={Boolean(industryMenu)}
            onClose={handleClose}
            keepMounted
          >
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="National &amp; Local Government" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="International Agencies" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Consulting &amp; Advisory" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Research" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Health Care" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Technology Enabler Practices" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Telecommunication" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Transportation &amp; Logistics" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Heritage &amp; Tourism" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Governance &amp; Policies" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Smart Cities Communities" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Geographic Information system (GIS)" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Smart Urban Infrastructure" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Market Research &amp; Insights" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Branding and Promotion" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Social Infrastructure" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Climate change &amp; Environment" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Security &amp; Surveillance" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Think Tank" />
                </a>
              </Link>
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem>
              <Link href="">
                <a>
                  <ListItemText primary="Risk &amp; Financial Advisory" />
                </a>
              </Link>
            </StyledMenuItem>
          </StyledMenu>

          <Button
            variant="contained"
            color="primary"
            style={{margin:"1rem",backgroundColor:"teal",marginRight:'1px'}}
          >
            <Link href="">
              <a>Smart Data Observatory</a>
            </Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{margin:"1rem",backgroundColor:"teal",marginRight:'1px'}}
          >
            <Link href="">
              <a>Contact us</a>
            </Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              margin: "1rem",
              backgroundColor: "#b2d8d8",
              color: "#008080",
              width: "10rem",
              marginRight:'1px'
            }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{margin:"1rem",backgroundColor:"teal"}}
          >
            <Link href="/about">
              <a>Login</a>
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
