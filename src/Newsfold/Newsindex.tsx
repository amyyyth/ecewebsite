import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

interface AppProps {
  url_slug: string
  child_url: string
}
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
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getnewshead/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get News headings")})
  };

  mapfunc = (obj: {heading: string},index: number)=>{
    return(<li key={index}><a href={"/"+this.props.child_url}><Typography variant="h6">{obj.heading}</Typography></a></li>)
  }

  render() {
    return (
      <Card id="qlinksa" style={{padding:"15px"}}>
        <CardContent style={{fontFamily:"Karla,sans-serif"}}>
          <Typography variant="h4" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"bolder",marginBottom:"15px"}}>NEWS</Typography>
          <div className="marquee">
            <ul>
              {
                this.state.apidata.data.map(
                  this.mapfunc
                )
              }
              </ul>
          </div>
          </CardContent>
      </Card>
    );
  }
}