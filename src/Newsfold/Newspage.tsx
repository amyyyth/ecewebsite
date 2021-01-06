import { Component } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';

interface AppProps {}
interface AppState {
  apidata: {
      data: {
          heading: string,
          newsops: string,
          date_uploaded: string
        }[]
    }
}

export default class Newspagecomp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: [{
                heading: 'Loading...',
                newsops: '{"ops":[{"insert":"Loading... Please wait.\\n"}]}',
                date_uploaded: 'loading...'
            }]
        }
    }};

  componentDidMount(){
    fetch('http://localhost:8000/backend/newsblog/getnews/1/',
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
        <h1 style={{ paddingLeft: "40px", paddingTop: "40px" }}>
          NEWS
        </h1>
        <Container style={{ marginLeft: "40px", marginRight: "40px", marginBottom: "40px" }}>
          {
            this.state.apidata.data.map(
              function(obj,index){
                return (
                  <div style={{ paddingTop: "20px" }}>
                    <Card style={{ backgroundColor: "#fff"}}>
                      <CardContent>
                        <Container style={{ display: "flex", justifyContent: "space-between" }}>
                          <h2>{obj.heading}</h2>
                          <p style={{ fontSize: "10px" }}>Published on: { obj.date_uploaded.replace('T',' ').slice(0,19) }</p>
                        </Container>
                        <ReactQuill 
                        value={JSON.parse(obj.newsops)} 
                        modules={{ toolbar: false }}
                        readOnly={true} />
                      </CardContent>
                    </Card>
                  </div>
                )
              }
            )
          }
        </Container>
      </div>
    );
  }
}
