import { Component } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CircularProgress from '@material-ui/core/CircularProgress';

interface AppProps {}
interface AppState {
  imgs: {cimgs: {img: string}[]},
  totalimgs: number,
  isLoadState: boolean
}

export default class PrimaryCarousel extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      imgs: {cimgs: [{img: ""}]},
      totalimgs: 1,
      isLoadState: false
    }
  };

  componentDidMount(){
    fetch('https://eced.herokuapp.com/backend/carousel/getimages/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({imgs:result});
        this.setState({totalimgs: result.cimgs.length});
        this.setState({isLoadState: true})
      }).catch(error=>{console.log("Did not get images")})
  };

  imgSliders = () =>{
    let da = this.state.imgs.cimgs.map(function(objs,index){
      return (
        <Slide index={index}>
          <div style={{ height: "50vh" }}>
            <img height={"100%"} width={"100%"} src={objs.img} />                
          </div>
        </Slide>)
        });
    return da;
  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={this.state.totalimgs}
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
