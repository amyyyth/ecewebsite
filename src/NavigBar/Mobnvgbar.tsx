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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: "40px",
      filter: "invert(100%)"
    },
    groupa: {
      paddingLeft: "24px",
      width: "100%"
    },
    headinga: {
      marginBottom: "5px",
      size: "20px"
    }
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
            <img
              className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Calicut_Logo.png"
            />
          </div>
          <div className={classes.groupa}>
            <h2 className={classes.headinga}>
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
            </h2>
          </div>
          <div>
            <IconButton
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={dstate} onClose={toggleDrawer(true)}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4>PROGRAMMES</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    B.Tech
                    <br /> M.Tech
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4>PEOPLE</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    B.Tech
                    <br /> M.Tech
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4>RESEARCH</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    B.Tech
                    <br /> M.Tech
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4>FACILITIES</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    B.Tech
                    <br /> M.Tech
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4>ACTIVITIES</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    B.Tech
                    <br /> M.Tech
                  </p>
                </AccordionDetails>
              </Accordion>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
