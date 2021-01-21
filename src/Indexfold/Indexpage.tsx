import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import PrimaryCarousel from "../Carouselfold/CarouselComp";
import PrimaryDepro from "../DepProfold/Depro";
import Primaryqlinks from "../Qlinksfold/Qlinks";
import Primarynews from "../Newsfold/Newsindex";
import Primarymv from "../Mandvfold/MandV";
import SwipeableTextMobileStepper from '../Testimonialsfold/Testimonials';

export default function PrimaryIndex() {
    return (
        <div>
        <div id="carsa">
          <PrimaryCarousel url_slug="carousel" />
        </div>
        <div id="botcardsa">
          <Container style={{ display: "flex"}}>
            <div id="lmain">
              <PrimaryDepro />
            </div>
            <div id="rmain">
              <div>
                <Primaryqlinks />
              </div>
              <div id="newsindex">
                <Primarynews url_slug="newsblog" child_url="news" />
              </div>
            </div>
          </Container>
          <Container style={{  display: "flex", marginTop:"25px"}}>
          <div style={{ width: "100vw", padding: "15px" }}>
            <Box display="flex">
              <Primarymv />
            </Box>
          </div>
          </Container>
          <div>
            <SwipeableTextMobileStepper />
          </div>
        </div>
      </div>
    )
}