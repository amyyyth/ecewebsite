import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { isMobile } from "react-device-detect";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./editedquill.snow.min.css";
import PrimaryNavBar from "./NavigBar/Nvgbar";
import PrimaryCarousel from "./Carouselfold/CarouselComp";
import PrimaryDepro from "./DepProfold/Depro";
import Primaryqlinks from "./Qlinksfold/Qlinks";
import Primarynews from "./Newsfold/Newsindex";
import Newspagecomp from "./Newsfold/Newspage";
import Primarymv from "./Mandvfold/MandV";
import MobileNavBar from "./NavigBar/Mobnvgbar";
import Primaryfooter from "./Footerfold/Footer";
import Academics from "./Academicsfold/Acadpage";
import Facultyapp from "./Facultiesfold/Facultypage";
import Labslist from "./Labsfold/Labslistpage";
import Labpage from "./Labsfold/Labspecific";
import Staticpage from "./Staticpagefold/Staticapp";
import SwipeableTextMobileStepper from './Testimonialsfold/Testimonials';
import MobLabslist from "./Labsfold/Labslistpagemob";
import MobLabpage from "./Labsfold/Labspecificmob";
import MobStaticpage from "./Staticpagefold/Staticappmob";
import Alumni from "./Alumnifold/Alumnipage";
import Activityapp from "./Activitiesfold/Activitiescomp";
import Creditspage from "./Creditsfold/Creditscomp";

interface AppProps {}
interface AppState {}

// ------------ THEME COLOR ---------------------
// #062a51
// #26a69a

const theme = createMuiTheme({
  typography:{
    fontFamily: "Karla,sans-serif,Montserrat",
    h6: {
      fontSize: "15px"
    }
  },
  palette: {
    primary: {
      main: "#26a69a"
    },
    secondary: {
      main: "#fffff0"
    },
    text: {
      primary: "#062a51"
    }
  }
});

// -----------------------------------------------

class App extends Component<AppProps, AppState> {

  indexpage = () => {
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
    );
  }

  mobindexpage = () => {
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

  renderChoose = () => {
    if (isMobile) {
      return (
        <Router>
          <MobileNavBar />
          <Switch>
            <Route path="/news">
              <Newspagecomp url_slug="newsblog" />
            </Route>
            <Route path="/alumninews">
                <Newspagecomp url_slug="alumni" />
              </Route>
            <Route path="/btech">
              <Academics heading="B Tech" acadurl="btech" classname="acadbodymob" />
            </Route>
            <Route path="/mtech">
              <Academics heading="M Tech" acadurl="mtech" classname="acadbodymob" />
            </Route>
            <Route path="/phd">
              <Academics heading="PhD" acadurl="phd" classname="acadbodymob" />
            </Route>
            <Route path="/faculty">
              <Facultyapp />
            </Route>
            <Route path="/alumni">
              <Alumni isMobile={true} />
            </Route>
            <Route path="/labs/:labid">
              <MobLabpage />
            </Route>
            <Route path="/labs">
              <MobLabslist />
            </Route>
            <Route path="/staff">
              <MobStaticpage urlslug="staff" />
            </Route>
            <Route path="/adhoc">
              <MobStaticpage urlslug="adhoc" />
            </Route>
            <Route path="/conferenceroom">
              <MobStaticpage urlslug="conferenceroom" />
            </Route>
            <Route path="/areasofresearch">
              <MobStaticpage urlslug="areasofresearch" />
            </Route>
            <Route path="/seminarhall">
              <MobStaticpage urlslug="seminarhall" />
            </Route>
            <Route path="/departmentlibrary">
              <MobStaticpage urlslug="departmentlibrary" />
            </Route>
            <Route path="/departmentbuildings">
              <MobStaticpage urlslug="departmentbuildings" />
            </Route>
            <Route path="/phdongoing">
              <MobStaticpage urlslug="phdongoing" />
            </Route>
            <Route path="/phdawarded">
              <MobStaticpage urlslug="phdawarded" />
            </Route>
            <Route path="/activities">
              <Activityapp />
            </Route>
            <Route path="/credits">
              <Creditspage />
            </Route>
            <Route path="/">
              { this.mobindexpage() }
            </Route>
          </Switch>
          <Primaryfooter />
        </Router> 
      );
    } else {
      return (
        <Router>
          <div id="bg">
            <PrimaryNavBar />
            <Switch>
              <Route path="/news">
                <Newspagecomp url_slug="newsblog" />
              </Route>
              <Route path="/alumninews">
                <Newspagecomp url_slug="alumni" />
              </Route>
              <Route path="/btech">
                <Academics heading="B Tech" acadurl="btech" classname="acadbody" />
              </Route>
              <Route path="/mtech">
                <Academics heading="M Tech" acadurl="mtech" classname="acadbody" />
              </Route>
              <Route path="/phd">
                <Academics heading="PhD" acadurl="phd" classname="acadbody" />
              </Route>
              <Route path="/faculty">
                <Facultyapp />
              </Route>
              <Route path="/alumni">
                <Alumni isMobile={false} />
              </Route>
              <Route path="/labs/:labid">
                <Labpage />
              </Route>
              <Route path="/labs">
                <Labslist />
              </Route>
              <Route path="/staff">
                <Staticpage urlslug="staff" />
              </Route>
              <Route path="/adhoc">
                <Staticpage urlslug="adhoc" />
              </Route>
              <Route path="/conferenceroom">
                <Staticpage urlslug="conferenceroom" />
              </Route>
              <Route path="/areasofresearch">
                <Staticpage urlslug="areasofresearch" />
              </Route>
              <Route path="/seminarhall">
                <Staticpage urlslug="seminarhall" />
              </Route>
              <Route path="/departmentlibrary">
                <Staticpage urlslug="departmentlibrary" />
              </Route>
              <Route path="/departmentbuildings">
                <Staticpage urlslug="departmentbuildings" />
              </Route>
              <Route path="/phdongoing">
                <Staticpage urlslug="phdongoing" />
              </Route>
              <Route path="/phdawarded">
                <Staticpage urlslug="phdawarded" />
              </Route>
              <Route path="/activities">
                <Activityapp />
              </Route>
              <Route path="/credits">
                <Creditspage />
              </Route>
              <Route path="/">
                {this.indexpage()}
              </Route>
            </Switch>
            <Primaryfooter />
          </div>
        </Router>
      );
    }
  };

  render() {
    return <ThemeProvider theme={theme}>{this.renderChoose()}</ThemeProvider>;
  }
}

render(<App />, document.getElementById("root"));
