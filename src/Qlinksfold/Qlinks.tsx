import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Primaryqlinks() {
  return (
    <Card id="qlinksa">
      <CardContent>
        <Typography variant="h3">Quick Links</Typography>
          <ul>
            <li><a href="http://nitc.ac.in/">NITC Home Page</a></li>
            <li><a href="http://nitc.ac.in/">Academic Calender</a></li>
            <li><a href="http://nitc.ac.in/">Hostel</a></li>
          </ul>
      </CardContent>
    </Card>
  );
}
