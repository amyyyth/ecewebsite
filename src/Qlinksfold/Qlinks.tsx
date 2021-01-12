import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Primaryqlinks() {
  return (
    <Card id="qlinksa" style={{padding:"15px"}}>
      <CardContent style={{fontFamily:"Karla,sans-serif"}}>
        <Typography variant="h4" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"bolder",marginBottom:"15px"}}>QUICK LINKS</Typography>
          <ul>
            <li><a href="http://nitc.ac.in/"><Typography variant="h6">NITC Home Page</Typography></a></li>
            <li><a href="http://nitc.ac.in/"><Typography variant="h6">Academic Calender</Typography></a></li>
            <li><a href="http://nitc.ac.in/"><Typography variant="h6">Hostel</Typography></a></li>
          </ul>
      </CardContent>
    </Card>
  );
}
