import { Component } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Rajpath from "../../Mediafold/lab.png";
import { apiurl } from '../../varconfig';

export default function Labpage(){
    let { labid } = useParams<{labid : string}>();
    const matches = useMediaQuery('(min-width:840px)');

    return <Labpageclass labid={labid} isDesk={matches} />;
}

interface AppProps {
    labid: string,
    isDesk: boolean
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
    fetch(apiurl+'/backend/labs/reqlab/'+this.props.labid+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get data")})
  };

  mobile = () => {
    return (
      <Container className="maincontainermobile">
            <h1 style={{ position: "relative", paddingTop: "20px", left: "2%", color: "#062a51" }}>
                {this.state.apidata.data.heading}
            </h1>
          <Card>
            <CardContent>
              <Container style={{ padding: "0px"}}>
                <div style={{ flexGrow: 1, position: "relative", zIndex: 2 }}>
                    <Container style={{ padding: "0px" }}>
                        <div className="workshopdetailsmobile">
                            <h1> COURSES </h1>
                            <p> {this.state.apidata.data.courses} </p>
                            <br />
                            <h1> FACULTY </h1>
                            <p> {this.state.apidata.data.faculty} </p>
                            <br />
                            <h1> STAFF </h1>
                            <p> {this.state.apidata.data.staff} </p>
                        </div>
                    </Container>
                    <Divider />
                    <Container style={{ padding: "0px" }}>
                        <div className={ "ql-container ql-snow" }>
                            <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.apidata.data.descops }}></div>
                        </div>
                    </Container>
                </div>
                <div className="triangle1" />
              </Container>
            </CardContent>
            <CardActions />
          </Card>
        </Container>
    )
  }

  desk = () => {
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
    )
  }

  render() {
    return <div>{(this.props.isDesk)?(this.desk()):(this.mobile())}</div>
  }
}