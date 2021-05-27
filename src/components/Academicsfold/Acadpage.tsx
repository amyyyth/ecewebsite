import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiurl } from '../../varconfig';

interface AppProps {
    heading: string,
    acadurl: string,
    classname: string
}

interface AppState {
    apidata: {
        data: string
    },
    isLoaded: boolean;
}

export default class Academics extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: '<p>Loading... Please wait...</p>'
        },
        isLoaded: false
    };
  };

  componentDidMount(){
    fetch(apiurl+'/backend/academics/getacad/'+this.props.acadurl+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result, isLoaded: true});
      }).catch(error=>{console.log("Did not get images")})
  };

  circloader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "100%" }} >
        <CircularProgress />
        <h4>Loading...</h4>
      </div>
    )
  }

  acadbody = () => {
    return (
      <div className={ "ql-container ql-snow" }>
        <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.apidata.data }}></div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: "40px", paddingTop: "40px", color: "#03205c" }}>
          {this.props.heading}
        </h1>
        <Container className={this.props.classname} maxWidth="md">
          <Card className="pdbga">
              <CardContent>
                {(this.state.isLoaded) ? (this.acadbody()):(this.circloader())}
              </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}