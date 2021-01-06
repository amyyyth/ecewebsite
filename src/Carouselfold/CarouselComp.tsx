import { Component } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface AppProps {}
interface AppState {
  imgs: {cimgs: {img: string}[]},
  totalimgs: number
}

export default class PrimaryCarousel extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      imgs: {cimgs: [{img: ""},{img: ""}]},
      totalimgs: 2
    }
  };

  componentDidMount(){
    fetch('http://localhost:8000/backend/carousel/getimages/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({imgs:result});
        this.setState({totalimgs: result.cimgs.length});
      }).catch(error=>{console.log("Did not get images")})
  };

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
            this.state.imgs.cimgs.map(function(objs,index){
              return (<Slide index={index}><img width={"100%"} src={objs.img} /></Slide>)
            })
          }         
        </Slider>
      </CarouselProvider>
    );
  }
}
