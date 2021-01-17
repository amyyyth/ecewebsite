import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Card from "@material-ui/core/Card";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Testi1 from "../Mediafold/testi1.jpg"
import Testi2 from "../Mediafold/testi2.jpg"
import Testi3 from "../Mediafold/testi3.jpg"
import Testi4 from "../Mediafold/testi4.jpg"
import Testi5 from "../Mediafold/testi5.jpg"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Aamiya Jeshai",
    job: "Graduate Engineer Trainee, NOKIA",
    imgPath: Testi1,
    imgdef:
      "Faculties having years of expertise on various topics of ECE make learning experience special and flawless. Department always puts in continuous efforts to offer courses demanded by the industrial standards and to engage students in productive learning activities."
  },
  {
    label: "Meghana Hari",
    job: "Applications Engineer, Oracle India Private Ltd.",
    imgPath: Testi2,
    imgdef:
      "When we step out from a school to a College we are of the impression that we are on our own and unlike in our school there is anybody to handhold us. But when I stepped into NITC my experience was quite different. The faculty and staffs of my department were always available to support us, to guide us and clear our doubts even beyond office hours. 24x7 lab facilities provided by the department was good relief for us, with our tight academic schedules, thanks to the support and commitment of the lab staffs, who were always with us at challenging times."
  },
  {
    label: "R. S. Prasobh Sankar",
    job: " Pursuing Ph. D, Department of ECE Indian Institute of Science Bangalore.",
    imgPath: Testi3,
    imgdef:
      "I had one of the best four years of my life during my B. Tech in ECE at NIT Calicut.  The faculties are very knowledgeable and put a lot of effort into teaching. They are very approachable and never hesitate to go that extra mile to make our journey better. The excellent level of academics, lab facilities, and the constant encouragement to do our best often lead to international level publications even at an undergraduate level. I can proudly say that the Department of ECE, NITC is one of the best in our country and leads to the overall development of our self, a fact which is reiterated by the ever-increasing list of success stories of our alumnus."
  },
  {
    label: "Swetha A",
    job: "Software Engineer at Microsoft India",
    imgPath: Testi4,
    imgdef:
      "The Department with its supportive faculty has motivated me to explore and understand the various core subjects as well choose from a variety of electives that caters to different fields of interests. The labs as part of the curriculum helped me gain more insight into the domain with the challenges met as part of the experiment giving hands on experience and the help and support provided to guide us through the various projects gave a real eye opener as to how the textbook concepts fall in place in the real world scenario. Being one of the class representatives of my batch for over 4 semesters, I vouch that the facilities offered by the department right from the classrooms to the labs which we could utilise even outside the lab hours, the department level festivities, Industrial visit bringing cheer and the faculty who were supportive and guided us in the right direction for the 4 years that moulded us from a student out from school to a better person equipped with technical knowledge and life skills, I am lucky to be an alumnus from ECED, NITC."
  },
  {
    label: "Umamaheswaran S",
    job: "Firmware Engineer at Itron India Pvt Ltd",
    imgPath: Testi5,
    imgdef:
      "The four years that I spent in the ECE Department gave me lot of memories to cherish for a life time.  I received immense help and support from faculties as well as other staffs all along the course particularly during the final year Major Project.  The academic curriculum is very well designed so as to impart the right amount of theoretical as well as practical knowledge to the students."
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: "120px",
    width: "120px",
    display: "block",
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative"
  },
  outcard: {
    backgroundColor: "#fefefe",
    height: "300px",
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    borderRadius: 10,
    margin: "2%",
    textAlign: "center",
    overflow: "hidden"
  },

  incard: {
    width: "100%",
    height: "90%",
    display: "flex",
    zIndex: 0,
    position: "relative",
    top: "-33%",
    backgroundColor: "#bffcf8",
    borderRadius: "5px",
    overflow: "hidden"
  },

  imgblock: {
    width: "17%",
    height: "100%",
    position: "relative",
    left: "-10%"
  },
  imgdiv: {
    backgroundColor: "none",
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  namediv: {
    backgroundColor: "none",
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
    zIndex: 1000,
    position: "relative",
    top: "-1%"
  },
  contentdiv: {
    backgroundColor: "none",
    display: "flex",
    width: "83%",
    height: "100%",
    alignItems: "center",

    overflow: "auto",
    textAlign: "left",
    paddingLeft: 10,
    zIndex: 1000,
    position: "relative",
    left: "-5%",
    top: "-5%"
  },
  jobitem: {
    position: "absolute",
    bottom: "5px",
    right: "5px"
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header} />
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            <Card className={classes.outcard}>
              <div className="triangle1" />
              <div className="testimonialheading">
                <h1>TESTIMONIALS</h1>
              </div>

              <div className={classes.incard}>
                <div className="triangle2" />
                <div className={classes.imgblock}>
                  <div className={classes.imgdiv}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img
                        className={classes.img}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>

                  <div className={classes.namediv}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                  </div>
                </div>
                <div className={classes.contentdiv}>
                  <p className="imgtxt">{tutorialSteps[activeStep].imgdef}</p>
                  <div className={classes.jobitem}>
                    <Typography>{tutorialSteps[activeStep].job}</Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;