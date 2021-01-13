import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Rajpath from "../rajpath.jpg";

function Labpage(){
    let { labid } = useParams<{labid : string}>();
    return <Labpageclass labid={labid} />;
}

interface AppProps {
    labid: string
}
interface AppState {
    apidata: {
        data: {
            heading: string,
            courses: string,
            faculty: string,
            staff: string,
            descops: string
        }
    }
}

class Labpageclass extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: {
                heading: 'Loading...',
                courses: 'Loading...',
                faculty: 'Loading...',
                staff: 'Loading...',
                descops: '<p>Loading... Please wait...</p>'
            }
        }
    };
  };

  componentDidMount(){
    console.log('http://localhost:8000/backend/labs/reqlab/'+this.props.labid+'/');
    fetch('http://localhost:8000/backend/labs/reqlab/'+this.props.labid+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get data")})
  };

  render() {
    return (
        <Container className="maincontainer">
          <Card className="imageplaceholderspecific">
            <img height="100%" src={Rajpath} alt="someImg" ></img>
          </Card>
          <Card className="contentplaceholderspecific">
            <CardContent>
              <Container>
                <div className="triangle1" />
                <div className="cardcontents">
                    <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                      {this.state.apidata.data.heading}
                    </h1>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                            <div className={ "ql-container ql-snow" }>
                                <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.apidata.data.descops }}></div>
                            </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className="workshopdetails">
                                <h1> COURSES </h1>
                                <p> {this.state.apidata.data.courses} </p>
                                <br />
                                <h1> FACULTY </h1>
                                <p> {this.state.apidata.data.faculty} </p>
                                <br />
                                <h1> STAFF </h1>
                                <p> {this.state.apidata.data.staff} </p>
                            </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
              </Container>
            </CardContent>
            <CardActions />
          </Card>
        </Container>
      );
  }
}

export default Labpage;