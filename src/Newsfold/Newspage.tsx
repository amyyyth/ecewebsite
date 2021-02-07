import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

interface AppProps {
  url_slug: string
}
interface AppState {
  apidata: {
      data: {
          heading: string,
          newsops: string,
          date_uploaded: string
        }[]
    },
    isLoaded: boolean
}

export default class Newspagecomp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: [{
                heading: 'Loading...',
                newsops: '<p>Loading... Please wait...</p>',
                date_uploaded: 'loading...'
            }]
        },
        isLoaded: false
    };
  };

  componentDidMount(){
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getnews/1/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result,isLoaded:true});
      }).catch(error=>{console.log("Did not get News")})
  };

  circloader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", width: "100vw" }} >
        <CircularProgress />
        <h4>Loading...</h4>
      </div>
    )
  }

  newsbody = () => {
    return (
      <Container style={{ marginLeft: "40px", marginRight: "40px", marginBottom: "40px" }}>
        {
          this.state.apidata.data.map(
            function(obj,index){
              return (
                <div style={{ paddingTop: "20px" }}>
                  <Card className="pdbga">
                    <CardContent>
                      <Container style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>{obj.heading}</h2>
                        <p style={{ fontSize: "10px" }}>Published on: { obj.date_uploaded.replace('T',' ').slice(0,19) }</p>
                      </Container>
                      <div className={ "ql-container ql-snow" }>
                        <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: obj.newsops }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            }
          )
        }
      </Container>
    )
  }

  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: "40px", paddingTop: "40px", color: "#03205c" }}>
          NEWS
        </h1>
        {(this.state.isLoaded)?(this.newsbody()):(this.circloader())}
      </div>
    );
  }
}
