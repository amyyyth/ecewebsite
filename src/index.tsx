import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { isMobile } from "react-device-detect";
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./quill.snow.min.css";
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

interface AppProps {}
interface AppState {
  name: string;
}

// ------------ THEME COLOR ---------------------

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a"
    },
    secondary: {
      main: "#fffff0"
    },
    text: {
      primary: "#26a69a"
    }
  }
});

// -----------------------------------------------

class App extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  indexpage = () => {
    return (
      <div>
        <div id="carsa">
          <PrimaryCarousel />
        </div>

        <div id="botcardsa">

          <Container style={{  display: "flex"}}>
            <div id="lmain">
              <PrimaryDepro />
            </div>
            <div id="rmain">
              <div>
                <Primaryqlinks />
              </div>
              <div id="newsindex">
                <Primarynews />
              </div>
            </div>
          </Container>
          <Container style={{  display: "flex", marginTop:"25px"}}>
          <div>
            <Box display="flex">
              <Primarymv />
            </Box>
          </div>
          </Container>

        </div>
      </div>
    );
  }

  renderChoose = () => {
    if (isMobile) {
      return (
        <div style={{ width: "100%" }}>
          <MobileNavBar />
          <div id="bg" style={{ width: "100%" }}>
            <div id="mobdepro">
              <PrimaryDepro />
            </div>
            <div id="newsindex">
                <Primarynews />
            </div>
            <div id="mv">
              <Box display="flex">
                <Primarymv />
              </Box>
            </div>
            <Primaryfooter />
          </div>
        </div>
      );
    } else {
      return (
        <Router>
          <div id="bg" style={{ width: "100%" }}>
            <PrimaryNavBar />
              <Switch>
                <Route path="/news">
                  <Newspagecomp />
                </Route>
                <Route path="/btech">
                  <Academics heading="B Tech" acadurl="btech" />
                </Route>
                <Route path="/mtech">
                  <Academics heading="M Tech" acadurl="mtech" />
                </Route>
                <Route path="/phd">
                  <Academics heading="PhD" acadurl="phd" />
                </Route>
                <Route path="/faculty">
                  <Facultyapp />
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
