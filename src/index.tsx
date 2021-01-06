import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";

import PrimaryNavBar from "./NavigBar/Nvgbar";
import PrimaryCarousel from "./Carouselfold/CarouselComp";
import PrimaryDepro from "./DepProfold/Depro";
import Primaryqlinks from "./Qlinksfold/Qlinks";
import Primarynews from "./Newsfold/Newsindex";
import Primarymv from "./Mandvfold/MandV";
import MobileNavBar from "./NavigBar/Mobnvgbar";
import Primaryfooter from "./Footerfold/Footer";

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

  renderChoose = () => {
    if (isMobile) {
      return (
        <div style={{ width: "100%" }}>
          <MobileNavBar />
          <div id="bg" style={{ width: "100%" }}>
            <div id="mobdepro">
              <PrimaryDepro />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="bg" style={{ width: "100%" }}>
          <PrimaryNavBar />
          <div id="carsa">
            <PrimaryCarousel />
          </div>
          <div id="botcardsa">
            <Box display="flex">
              <div id="lmain">
                <PrimaryDepro />
              </div>
              <div id="rmain">
                <div id="qlinksindex">
                  <Primaryqlinks />
                </div>
                <div id="newsindex">
                  <Primarynews />
                </div>
              </div>
            </Box>
            <div id="mv">
              <Box display="flex">
                <Primarymv />
              </Box>
            </div>
          </div>
          <Primaryfooter />
        </div>
      );
    }
  };

  render() {
    return <ThemeProvider theme={theme}>{this.renderChoose()}</ThemeProvider>;
  }
}

render(<App />, document.getElementById("root"));
