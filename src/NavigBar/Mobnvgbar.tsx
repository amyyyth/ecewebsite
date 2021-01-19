import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: "50px",
      filter: "invert(100%)"
    },
    groupa: {
      paddingLeft: "24px",
      width: "100%",
    },
    headinga: {
      marginBottom: "5px",
      fontFamily: "Montserrat,sans-serif",
    },
  })
);

export default function MobileNavBar() {
  const classes = useStyles();
  const [dstate, setdstate] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setdstate(!dstate);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <a href="/" ><img
              className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Calicut_Logo.png"
              alt="Nitc logo"
            /></a>
          </div>
          <div className={classes.groupa}>
            <a href="/">
            <h2 className={classes.headinga}>
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
            </h2>
            </a>
          </div>
          <div>
            <IconButton
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={dstate} onClose={toggleDrawer(true)} style={{fontFamily:"Karla"}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 style={{ margin: "0px" }}>PROGRAMMES</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem button component="a" {...{href: "/btech"}}>
                      <ListItemText primary="B.Tech" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/mtech"}}>
                      <ListItemText primary="M.Tech" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/phd"}}>
                      <ListItemText primary="PhD" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <h4 style={{ margin: "0px" }}>PEOPLE</h4>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem button component="a" {...{href: "/faculty"}}>
                      <ListItemText primary="Faculty" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/staff"}}>
                      <ListItemText primary="Staff" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/adhoc"}}>
                      <ListItemText primary="Ad Hoc" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <h4 style={{ margin: "0px" }}>RESEARCH</h4>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem button component="a" {...{href: "/areasofresearch"}}>
                      <ListItemText primary="Areas of Research" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/phdongoing"}}>
                      <ListItemText primary="PhD (Ongoing)" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/phdawarded"}}>
                      <ListItemText primary="PhD (Awarded)" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <h4 style={{ margin: "0px" }}>FACILITIES</h4>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem button component="a" {...{href: "/labs"}}>
                      <ListItemText primary="Laboratories" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/conferenceroom"}}>
                      <ListItemText primary="Conference Room" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/seminarhall"}}>
                      <ListItemText primary="Seminar Hall" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/departmentbuildings"}}>
                      <ListItemText primary="Department Buildings" />
                    </ListItem>
                    <ListItem button component="a" {...{href: "/departmentlibrary"}}>
                      <ListItemText primary="Department Library" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <a href="/activities">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <h4 style={{ margin: "0px" }}>ACTIVITIES</h4>
                  </AccordionSummary>
                </Accordion>
              </a>
              <a href="/ecea">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <h4 style={{ margin: "0px" }}>ECEA</h4>
                  </AccordionSummary>
                </Accordion>
              </a>
              <a href="https://eced.herokuapp.com/backend/people/login/">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <AccountCircleIcon color="primary" />
                    <h4 style={{ margin: "0px" }}>LOGIN</h4>
                  </AccordionSummary>
                </Accordion>
              </a>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
