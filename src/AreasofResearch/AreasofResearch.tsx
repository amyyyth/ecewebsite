import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Rajpath from "../rajpath.jpg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
//import Box from "@material-ui/core/Box";

interface AppProps {}
interface AppState {
  apidata: {
    data: {
      heading: string;
      descops: string;
    };
  };
  selectedArea: number;
}

export default class AreasofResearch extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      apidata: {
        data: {
          heading: "Loading...",
          descops: "<p>Loading...</p>",
        },
      },
      selectedArea: 0,
    };
  }

  componentDidMount() {
    fetch("https://eced.herokuapp.com/backend/page/reqpage/areasofresearch/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ apidata: result });
      })
      .catch((error) => {
        console.log("Did not get data");
      });
  }

  render() {
    return (
      <Container className="maincontainer">
        <Card className="imageplaceholder">
          <img style={{ display: "block"}} height="100%" src={Rajpath} alt="someImg"/>
        </Card>
        <Card className="contentplaceholder">
          <CardContent>
            <Container>
              <div className="triangle1" />
              <div className="cardcontents">
                <Typography component="div" style={{ minHeight: "105vh" }}>
                  <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                    {this.state.apidata.data.heading}
                  </h1>
                  <div style={{display:"flex"}}>
                  <Grid container spacing={3} >
                    <Grid item xs={12} style={{flexGrow:1}}>
                      <Button variant="outlined" style={{borderRadius:"50px", width:"100%"}} onClick={()=>{this.setState({selectedArea:2})}}>xs=12</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="outlined" style={{borderRadius:"50px", width:"100%"}}>xs=6</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="outlined" style={{borderRadius:"50px", width:"100%"}}>xs=6</Button>
                    </Grid>
                   
                    <Grid item xs={12} >
                      <Button variant="outlined" style={{borderRadius:"50px", width:"100%"}}>xs=3</Button>
                    </Grid>
                  </Grid>
                  </div>

                  <Divider style={{ margin: "20px" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                    }}
                  >
                    <h2> Heading of Area </h2>
                    {/* shoow the image at place of rajpath...
                    <Box style={{ maxWidth: "400px",margin: "auto" }}>
                      <img
                        width="100%"
                        src={Rajpath}
                        alt="research-area"
                      />
                    </Box> */}
                    {/* Text here */}
                  </div>

                  <div className="labs">
                    <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                      Other Areas of Research
                    </h1>
                    <div className={"ql-container ql-snow"}>
                      <div
                        className={"ql-editor"}
                        dangerouslySetInnerHTML={{
                          __html: this.state.apidata.data.descops,
                        }}
                      ></div>
                    </div>
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
}
