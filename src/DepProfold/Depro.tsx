import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function PrimaryDepro() {
  //const classes = useStyles();
  return (
    <Card className="pdbga">
      <CardContent>
        <Typography variant="h3">Department Profile</Typography>
        <p>
          The Department of Electronics and Communication Engineering, National
          Institute of Technology, Calicut, is involved in providing quality
          education at both Undergraduate (UG) and Postgraduate (PG) levels. UG
          programme in Electronics & Communication Engineering started in 1980
          in the Department of Electrical Engineering. In 1994 a PG programme in
          Digital Systems and Communication started. The rapid development in
          Electronics and Communications initiated the inception of a separate
          Department of Electronics Engineering in 1997, after the trifurcation
          of the Department of Electrical Engineering. In addition to the above
          programmes the Department is offering PG programmes in Electronic
          Design & Technology, Microelectronics & VLSI Design, Telecommunication
          and Signal Processing. The syllabi of the courses are continuously
          updated and the laboratories modernized to reflect the rapid changes
          in technology. It also offers high quality research programmes at
          Ph.D. level in a variety of areas.
        </p>
      </CardContent>
    </Card>
  );
}
