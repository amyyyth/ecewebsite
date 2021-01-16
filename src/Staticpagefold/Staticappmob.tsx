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

export default class MobStaticpage extends Component<AppProps,AppState> {
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
    fetch('https://eced.herokuapp.com/backend/page/reqpage/'.concat(this.props.urlslug).concat('/'),
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get data")})
  };

  render() {
    return (
      <Container className="maincontainermobile">
        <Card className="contentplaceholdermobile">
          <CardContent>
            <Container>
              <div className="triangle1" />
              <div className="cardcontents">
                <Typography component="div" style={{ minHeight: "105vh" }}>
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