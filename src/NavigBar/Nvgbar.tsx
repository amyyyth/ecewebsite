import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nitc: {
      marginTop: "0px",
      marginBottom: "0px",
      size: "20px",
      fontSize: "18px",
      fontWeight: "lighter",
      fontFamily: "Karla,sans-serif",
    },
    logo: {
      height: "100px",
      filter: "invert(100%)",
    },
    groupa: {
      paddingLeft: "24px",
      width: "100%",
    },
    headinga: {
      marginBottom: "5px",
      fontFamily: "Montserrat,sans-serif",
    },
    navButton: {
      fontFamily: "Karla,sans-serif",
      fontWeight: "bolder",
      fontSize: "12px",
    },
  })
);

export default function PrimaryNavBar() {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);

  const handleClick = (obj: any) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    obj(event.currentTarget);
  };

  const handleClose = (obj: any) => () => {
    obj(null);
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
            <div>
              <p className={classes.nitc}>
                NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <Box display="flex" justifyContent="flex-end">
                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl1)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    PROGRAMMES
                  </Button>
                  <Menu
                    id="programmes"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose(setAnchorEl1)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    elevation={0}
                    getContentAnchorEl={null}
                  >
                    <a href="/btech" style={{ color: "#03205c" }}>
                      <MenuItem onClick={handleClose(setAnchorEl1)}>
                        B.Tech
                      </MenuItem>
                    </a>
                    <Divider />
                    <a href="/mtech" style={{ color: "#03205c" }}>
                      <MenuItem onClick={handleClose(setAnchorEl1)}>
                        M.Tech
                      </MenuItem>
                    </a>
                    <Divider />
                    <a href="/phd" style={{ color: "#03205c" }}>
                      <MenuItem onClick={handleClose(setAnchorEl1)}>
                        PhD
                      </MenuItem>
                    </a>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl2)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    PEOPLE
                  </Button>
                  <Menu
                    id="people"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose(setAnchorEl2)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    elevation={0}
                    getContentAnchorEl={null}
                  >
                    <MenuItem onClick={handleClose(setAnchorEl2)}>
                      FACULTY MEMBERS
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose(setAnchorEl2)}>
                      STAFF
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose(setAnchorEl2)}>
                      ADHOC
                    </MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl3)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    RESEARCH
                  </Button>
                  <Menu
                    id="research"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={handleClose(setAnchorEl3)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    elevation={0}
                    getContentAnchorEl={null}
                  >
                    <MenuItem onClick={handleClose(setAnchorEl3)}>
                      AREAS OF RESEARCH
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose(setAnchorEl3)}>
                      ONGOING
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose(setAnchorEl3)}>
                      Lorem{" "}
                    </MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl4)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    FACILITIES
                  </Button>
                  <Menu
                    id="facilities"
                    anchorEl={anchorEl4}
                    keepMounted
                    open={Boolean(anchorEl4)}
                    onClose={handleClose(setAnchorEl4)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    elevation={0}
                    getContentAnchorEl={null}
                  >
                    <MenuItem onClick={handleClose(setAnchorEl4)}>
                      lore
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose(setAnchorEl4)}>
                      m ipsem
                    </MenuItem>
                    <MenuItem onClick={handleClose(setAnchorEl4)}>as</MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl3)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    ACTIVITIES
                  </Button>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl3)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    ALUMNI
                  </Button>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick(setAnchorEl3)}
                    color="secondary"
                    className={classes.navButton}
                  >
                    ECEA
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
