import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Button from '@material-ui/core/Button';

interface AppProps {
  url_slug: string
}
interface AppState {
  apidata: {
      data: {
          id: number,
          heading: string,
          newsops: string,
          date_uploaded: string,
        }[],
      lastPage: boolean | undefined
    },
    isLoaded: boolean,
    currentPage: number
}

export default class Newspagecomp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: {
            data: [{
                id: 0,
                heading: 'Loading...',
                newsops: '<p>Loading... Please wait...</p>',
                date_uploaded: 'loading...',
            }],
            lastPage: true
        },
        isLoaded: false,
        currentPage: 1
    };
  };

  componentDidMount(){
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getnews/'+String(this.state.currentPage)+'/',
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

  leftClick = () => {
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getnews/'+String(this.state.currentPage-1)+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result,isLoaded:true});
      }).catch(error=>{console.log("Did not get News")})
  }

  rightClick = () => {
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getnews/'+String(this.state.currentPage+1)+'/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result,isLoaded:true});
      }).catch(error=>{console.log("Did not get News")})
  }

  navButtons = () => {
    let lbs = true;
    (this.state.currentPage===1)?(lbs=true):(lbs=false);
    
    return (
      <div style={{ justifyContent: "center", paddingTop: "20px", paddingBottom: "20px", display: "flex"}}>
        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={lbs}
            style={{marginRight: "10px"}}
            startIcon={<NavigateBeforeIcon />}
            onClick={this.leftClick}
          >
            Prev
          </Button> 
          <Button
            variant="contained"
            color="primary"
            disabled={this.state.apidata.lastPage}
            style={{marginLeft: "10px"}}
            endIcon={<NavigateNextIcon />}
            onClick={this.rightClick}
          >
            Next
          </Button>
        </div>
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
                <div style={{ paddingTop: "20px" }} key={ obj.id }>
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
        {
          this.navButtons()
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
