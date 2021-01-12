import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';

export default function Primarymv() {
  //const classes = useStyles();
  return (
    <Card className="pdbga">
      <CardContent>
        <Typography variant="h3" style={{fontFamily:"Karla,sans-serif"}}>VISION</Typography>
        <Typography variant="h6" style={{fontFamily:"Montserrat,sans-serif",marginTop:"20px"}}>
          The Department of Electronics and Communication Engineering is
          envisioned to be a leading centre of higher learning with academic
          excellence in the field of electronics and communication engineering.
          <br />
          <br />
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h3" style={{fontFamily:"Karla,sans-serif"}}>MISSION</Typography>
        <Typography variant="h6" style={{fontFamily:"Montserrat,sans-serif",marginTop:"20px"}}>
          The mission of the Department of Electronics and Communication
          Engineering is to impart high quality technical education by offering
          undergraduate, graduate and research programs in the domain of
          electronics and communication engineering with thorough foundation in
          theory, along with strong hands-on design and laboratory components,
          tools and skills necessary for the students to become successful major
          contributors to society and profession.
        </Typography>
      </CardContent>
    </Card>
  );
}
