import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

interface AppProps {}
interface AppState {
  apidata: {
      data: {heading: string}[]
    }
}

export default class Primarynews extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: [{heading: 'Loading...'}]
        }
    }};

  componentDidMount(){
    fetch('http://localhost:8000/backend/newsblog/getnewshead/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get News headings")})
  };

  render() {
    return (
      <Card id="qlinksa">
        <CardContent>
          <Typography variant="h3">NEWS</Typography>
            <ul>
            {
              this.state.apidata.data.map(
                function (obj,index){
                  return (<li><a href="/news">{obj.heading}</a></li>);
                }
              )
            }
            </ul>
          </CardContent>
      </Card>
    );
  }
}