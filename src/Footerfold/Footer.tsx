import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fleft: {
      width: "50%"
    },

    fright: {
      width: "50%"
    },
    footerbg: {
      backgroundColor: "gray"
    },
    contactus: {
      marginLeft: "40px"
    },

    cright: {
      marginRight: "40px"
    }
  })
);

export default function Primaryfooter() {
  const classes = useStyles();
  return (
    <div className={classes.footerbg}>
      <Box display="flex" alignItems="center">
        <div className={classes.fleft}>
          <Box justifyContent="flex-start">
            <div className={classes.contactus}>
              <h2 style={{ marginBottom: "5px" }}>Contact Us</h2>
              <Divider />
              <p>
                Department of Electronics & Communication Engineering
                <br /> National Institute of Technology Calicut
                <br /> NIT Campus P.O.
                <br />
                CALICUT-673601
                <br /> Contact No : 0495-2286701 <br /> e-mail:
                ecedoffice@nitc.ac.in
              </p>
            </div>
          </Box>
        </div>
        <div className={classes.fright}>
          <Box display="flex" justifyContent="flex-end">
            <div className={classes.cright}>
              <p>aidiywbi</p>
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
}
