import React, { Component, Suspense, lazy } from "react";
import { render } from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./editedquill.snow.min.css";
import "./editedquilltable.css";

// First load desktop
import CircularProgress from '@material-ui/core/CircularProgress';
import PrimaryNavBar from "./NavigBar/Nvgbar";
import Primaryfooter from "./Footerfold/Footer";
import Creditspage from "./Creditsfold/Creditscomp";
import Home from "./Indexfold/Indexpage";
import Academics from "./Academicsfold/Acadpage";
import Staticpage from "./Staticpagefold/Staticapp";
import Newspagecomp from "./Newsfold/Newspage";

// First load Mobile
import Mobhome from "./Indexfold/Mobindexpage";
import MobileNavBar from "./NavigBar/Mobnvgbar";
import MobStaticpage from "./Staticpagefold/Staticappmob";

// Lazy loading
const Alumni = lazy(()=>import("./Alumnifold/Alumnipage"));
const Facultyapp = lazy(()=>import("./Facultiesfold/Facultypage"));
const Labslist = lazy(()=>import("./Labsfold/Labslistpage"));
const Labpage = lazy(()=>import("./Labsfold/Labspecific"));
const MobLabslist = lazy(()=>import("./Labsfold/Labslistpagemob"));
const MobLabpage = lazy(()=>import("./Labsfold/Labspecificmob"));
const Activityapp = lazy(()=>import("./Activitiesfold/Activitiescomp"));
const Staffapp = lazy(()=>import("./Stafffold/Staffpage"));

interface AppProps {}
interface AppState {
  isLoaded: boolean
}

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

const circloaderfall = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "100%" }} >
      <CircularProgress />
      <h4>Taking more time than usual. Please check your internet connection and refresh the page.</h4>
    </div>
  )
}

class App extends Component<AppProps, AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount(){
    this.setState({isLoaded:true})
  }
  
  circloader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }} >
        <CircularProgress />
        <h4>Loading...</h4>
      </div>
    )
  }

  renderChoose = () => {
    if (isMobile) {
      return (
        <Router>
          <MobileNavBar />
          <Suspense fallback={circloaderfall}>
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
              <Route path="/faculty" component={Facultyapp} />
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
                <Staffapp />
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
                <Mobhome />
              </Route>
            </Switch>
          </Suspense>
          <Primaryfooter />
        </Router> 
      );
    } else {
      return (
        <Router>
          <div id="bg">
            <PrimaryNavBar />
            <Suspense fallback={circloaderfall}>
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
                <Route path="/faculty" component={Facultyapp} />
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
                  <Staffapp />
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
                  <Home />
                </Route>
              </Switch>
            </Suspense>
            <Primaryfooter />
          </div>
        </Router>
      );
    }
  };

  render() {
    return <ThemeProvider theme={theme}>{
      (this.state.isLoaded)?(this.renderChoose()):(this.circloader())
      }</ThemeProvider>;
  }
}

render(<App />, document.getElementById("root"));
