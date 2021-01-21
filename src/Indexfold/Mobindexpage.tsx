import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import PrimaryCarousel from "../Carouselfold/CarouselComp";
import PrimaryDepro from "../DepProfold/Depro";
import Primarynews from "../Newsfold/Newsindex";
import Primarymv from "../Mandvfold/MandV";
import SwipeableTextMobileStepper from '../Testimonialsfold/Testimonials';

export default function Mobindex(){
    return (
        <div id="bg" style={{ width: "100%" }}>
            <div id="carsamob">
                <PrimaryCarousel url_slug="carousel" />
            </div>
            <div id="botcardsa">
                <Container style={{  display: "flex", flexDirection:"column"}}>
            <div id="newsindex">
                <Primarynews url_slug="newsblog" child_url="news" />
            </div>
            <div id="mobdepro">
                <PrimaryDepro />
            </div>
            <div style={{ paddingTop: "20px" }}>
                <Box display="flex">
                    <Primarymv />
                </Box>
            </div>
                </Container>
            </div>
        <SwipeableTextMobileStepper />
      </div>
    )
}