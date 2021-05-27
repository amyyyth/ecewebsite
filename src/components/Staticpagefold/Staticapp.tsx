import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Rajpath from "../../Mediafold/lab.png";
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiurl } from '../../varconfig';

interface AppProps {
  urlslug: string,
  isDesk: boolean
}
interface AppState {
  apidata: {
      data: {
          heading: string,
          descops: string
        }
    }
  isLoaded: boolean
}

export default class Staticclass extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: {
                heading: 'Loading...',
                descops: '<p>Loading...</p>'
            }
        },
        isLoaded: false
    };
  };

  componentDidMount(){
    fetch(apiurl+'/backend/page/reqpage/'.concat(this.props.urlslug).concat('/'),
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
        this.setState({isLoaded:true})
      }).catch(error=>{console.log("Did not get data")})
  };

  circloader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "100%" }} >
        <CircularProgress />
        <h4>Loading...</h4>
      </div>
    )
  }

  insidecontainer = () => (
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
  )

  afterload = () => {
    return (
      <div>
      {
        (this.props.isDesk)?(
          <div className="maincontainer" >
            <Card className="imageplaceholder" >
              <img height="100%" src={Rajpath} alt="someImg" ></img>
            </Card>
            <Card className="contentplaceholder">
              <CardContent>
                {this.insidecontainer()}
              </CardContent>
            <CardActions />
            </Card>
          </div>
        ):(
          <Container className="maincontainermobile">
            <Card className="contentplaceholdermobile">
              <CardContent>
                {this.insidecontainer()}
              </CardContent>
              <CardActions />
            </Card>
          </Container>
        )
      }
      </div>
    )
  }

  render() {
    return (
    <div>
    {
      (this.state.isLoaded)?(this.afterload()):(this.circloader())
    }
    </div>
    );
  }
}