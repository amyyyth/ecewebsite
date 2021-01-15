import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';

interface AppProps {
    heading: string,
    acadurl: string,
    classname: string
}

interface AppState {
    apidata: {
        data: string
    }
}

export default class Academics extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: '<p>Loading... Please wait...</p>'
        }
    };
  };

  componentDidMount(){
    fetch('https://eced.herokuapp.com/backend/academics/getacad/'+this.props.acadurl+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get images")})
  };

  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: "40px", paddingTop: "40px", color: "#03205c" }}>
          {this.props.heading}
        </h1>
        <Container className={this.props.classname}>
          <Card className="pdbga">
              <CardContent>
                  <div className={ "ql-container ql-snow" }>
                    <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.apidata.data }}></div>
                  </div>
              </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}