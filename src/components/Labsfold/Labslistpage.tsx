import { Component } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useRouteMatch } from "react-router-dom";
import Rajpath from "../../Mediafold/lab.png";
import { apiurl } from '../../varconfig';

export default function Labslist(){
  let match = useRouteMatch();
  const matches = useMediaQuery('(min-width:840px)');
  
  return <Labslistclass match={match} isDesk={matches} />;
}

interface AppProps {
  match: any,
  isDesk: boolean
}
interface AppState {
  apidata: {
      data: {
          id: string;
          heading: string
        }[]
    }
}

class Labslistclass extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: [{
                id: '1',
                heading: 'Loading...'
            }]
        }
    };
  };

  componentDidMount(){
    fetch(apiurl+'/backend/labs/reqlabls/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get labs")})
  };

  render() {
    let match = this.props.match;
    return (
      <div>
        {
          (this.props.isDesk)?(
      <Container className="maincontainer">
        <Card className="imageplaceholder">
          <img height="100%" src={Rajpath} alt="someImg" ></img>
        </Card>
        <Card className="contentplaceholder">
          <CardContent>
            <Container>
              <div className="triangle1" />
              <div className="cardcontents">
                <Typography component="div" style={{ minHeight: "105vh" }}>
                  <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                    LABORATORIES
                  </h1>
                  <div className="labs">
                    {
                      this.state.apidata.data.map(function(obj,index){
                        return (
                          <li><a href={`${match.url}/`.concat(obj.id)}>{obj.heading}</a></li>
                        )
                      })
                    }
                  </div>
                </Typography>
              </div>
            </Container>
          </CardContent>
          <CardActions />
        </Card>
      </Container>
          ):(
            <Container className="maincontainermobile">
            <Card className="contentplaceholdermobile">
              <CardContent>
                <Container>
                  <div className="triangle1" />
                  <div className="cardcontents">
                    <Typography component="div" style={{ minHeight: "105vh" }}>
                      <h1 style={{ position: "relative", left: "2%", top: "5%" }}>
                        LABORATORIES
                      </h1>
                      <div className="labs">
                        {
                          this.state.apidata.data.map(function(obj,index){
                            return (
                              <li><a href={`${match.url}/`.concat(obj.id)}>{obj.heading}</a></li>
                            )
                          })
                        }
                      </div>
                    </Typography>
                  </div>
                </Container>
              </CardContent>
              <CardActions />
            </Card>
          </Container>
          )
        }
      </div>
      
    );
  }
}