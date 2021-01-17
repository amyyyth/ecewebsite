import { Component } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CircularProgress from '@material-ui/core/CircularProgress';

interface AppProps {
  url_slug: string
}
interface AppState {
  imgs: {
    cimgs: {
      enc_img: string
    }[]
  },
  totalimgs: number,
  isLoadState: boolean,
  width:number,
  height:number
}

export default class PrimaryCarousel extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      imgs: {
        cimgs: [{
          enc_img: " "
        }]},
      totalimgs: 1,
      isLoadState: false,
       width: 0, 
       height: 0 
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  };

  componentDidMount(){
    this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
    fetch('https://eced.herokuapp.com/backend/'+this.props.url_slug+'/getimages/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({imgs:result});
        this.setState({totalimgs: result.cimgs.length});
        this.setState({isLoadState: true})
      }).catch(error=>{console.log("Did not get images")})
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: document.body.clientWidth, height: document.body.clientHeight });
  }
  imgSliders = () =>{
    let da = this.state.imgs.cimgs.map(function(objs,index){
      return (
        <Slide index={index} key={index}>
          <div style={{width:"100%",height:"100%"}}>
            <img style={{objectFit: "cover", objectPosition:"0 30%"}} height={"100%"} width={"100%"} src={objs.enc_img} alt={"Error with img"} />                
          </div>
        </Slide>)
        });
    return da;
  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60*this.state.height/this.state.width}
        totalSlides={this.state.totalimgs}
        visibleSlides={1}
        isPlaying={true}
        infinite={true}
        interval={3000}
      >
        <Slider>
          {
            this.state.isLoadState ? (
              this.imgSliders()
            ) : (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }} >
                <CircularProgress />
                <h4>Getting images...</h4>
              </div>
          )} 
        </Slider>
      </CarouselProvider>
    );
  }
}
