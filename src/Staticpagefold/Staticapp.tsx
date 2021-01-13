import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

interface AppProps {
  urlslug: string
}
interface AppState {
  apidata: {
      data: {
          heading: string,
          descops: string
        }
    }
}

export default class Staticpage extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: {
                heading: 'Loading...',
                descops: '<p>Loading...</p>'
            }
        }
    };
  };

  componentDidMount(){
    fetch('https://eced.herokuapp.com/page/reqpage/'.concat(this.props.urlslug).concat('/'),
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
                    {this.state.apidata.data.heading}
                  </h1>
                  <div className="labs">
                    <div className={ "ql-container ql-snow" }>
                        <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.apidata.data.descops }}></div>
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