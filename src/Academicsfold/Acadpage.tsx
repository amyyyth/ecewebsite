import { Component } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';

interface AppProps {
    heading: string,
    acadurl: string
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
            data: '{"ops":[{"insert":"Loading... Please wait.\\n"}]}'
        }
    }};

  componentDidMount(){
    fetch('http://localhost:8000/backend/academics/getacad/'+this.props.acadurl+'/',
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
        <Container style={{ marginLeft: "40px", marginRight: "40px", marginBottom: "40px" }}>
            <div style={{ paddingTop: "20px" }}>
                <Card className="pdbga">
                    <CardContent>
                        <ReactQuill 
                        value={JSON.parse(this.state.apidata.data)} 
                        modules={{ toolbar: false }}
                        readOnly={true} />
                    </CardContent>
                </Card>
            </div>
        </Container>
      </div>
    );
  }
}