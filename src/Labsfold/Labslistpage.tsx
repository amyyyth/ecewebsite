import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export default function Workshops_page() {
  return (
    <Container className="maincontainer">
      <Card className="imageplaceholder">
          <img height="100%" src="https://lh3.googleusercontent.com/proxy/OzDAbpL93wo7FEU2uaOjWv9ekwUSs-qASbfhL07GO8Rqfl8ImsY8smRLwFb3R3fG8xNdEKfVDxVqlDbmn5HJmdJta6VzPNRxMa9y_8Non0E3k9hKOsEJ7Os" alt="someImg" ></img>
          </Card>
      <Card className="contentplaceholder">
        <CardContent>
          <Container>
            <div className="triangle1" />
            <div className="cardcontents">
              <Typography component="div" style={{ height: "105vh" }}>
                <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                  LABORATORIES
                </h1>
                <div className="labs">
                  <li>
                    <a href=""> Electronics Workshop</a>
                  </li>
                  <li>
                    <a href=""> Electronics Circuits Lab</a>
                  </li>
                  <li>
                    <a href=""> Integrated Circuits Lab</a>
                  </li>
                  <li>
                    <a href=""> Embedded Systems Lab</a>
                  </li>
                  <li>
                    <a href=""> Communications lab</a>
                  </li>
                  <li>
                    <a href=""> Signal Processing and Communication Lab</a>
                  </li>
                  <li>
                    <a href=""> Digital Signal Processing Lab</a>
                  </li>
                  <li>
                    <a href=""> Simulation Lab</a>
                  </li>
                  <li>
                    <a href=""> Telecommunication Technology Lab</a>
                  </li>
                  <li>
                    <a href=""> DST-FIST Lab</a>
                  </li>
                  <li>
                    <a href=""> Microelectronics and VLSI Lab</a>
                  </li>
                  <li>
                    <a href=""> PSoC Lab</a>
                  </li>
                </div>
              </Typography>
            </div>
          </Container>
        </CardContent>
        <CardActions />
      </Card>
    </Container>
  );
}