import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { isMobile, isMobileOnly } from "react-device-detect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fleft: {
      width: isMobile?"100%":"50%"
    },

    fright: {
      width: "50%"
    },
    footerbg: {
      backgroundColor: "#D3D3D3"
    },
    contactus: {
      marginLeft: "40px"
    },

    cright: {
      fontFamily:"Karla",
      marginRight: isMobile?"0px":"20px"
    },
    fLarge :{
      fontWeight:"bolder",
      fontSize:"16px",
      color:"#000"
    }
  })
);

export default function Primaryfooter() {
  const classes = useStyles();
  return (
    <div className={classes.footerbg}>
      <Box display="flex" alignItems="center" flexDirection={isMobile?"column":"row"}>
        <div className={classes.fleft}>
          <Box justifyContent="flex-start">
            <div className={classes.contactus}>
              <h2 style={{ marginBottom: "5px" , fontFamily:"Montserrat", fontWeight: "bolder"}}>Contact Us</h2>
              <Divider />
              <p style={{ marginBottom: "5px" , fontFamily:"Karla", lineHeight:"150%"}}>
                Department of Electronics & Communication Engineering
                <br /> National Institute of Technology Calicut
                <br /> NIT Campus P.O.
                <br />
                CALICUT-673601
                <br /> Contact No : {isMobile?<a href="tel:0495-2286701" style={{color:"#000"}}>0495-2286701 </a>:"0495-2286701"} <br /> E-mail : <a href="mailto:ecedoffice@nitc.ac.in" style={{color:"#000"}}>
                ecedoffice@nitc.ac.in</a>
              </p>
            </div>
          </Box>
        </div>
        <div className={classes.fright}>
          <Box display="flex"  justifyContent="flex-end">
          <Box display="flex" flexDirection="column">
            <div className={classes.cright} >
              <p>Made with ❤️ from ECED Website team</p>
            </div>
          </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}
