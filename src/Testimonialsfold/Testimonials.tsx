import React from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Card from "@material-ui/core/Card";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { isMobile } from "react-device-detect";

import Testi1 from "../Mediafold/testi1.jpg";
import Testi2 from "../Mediafold/testi2.jpg";
import Testi3 from "../Mediafold/testi3.jpg";
import Testi4 from "../Mediafold/testi4.jpg";
import Testi5 from "../Mediafold/testi5.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const svgImg =
  'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 50" enable-background="new" xml:space="preserve"><polygon points="0,0 0,20 100,40 100,0" style="fill:rgb(191,252,248)"/></svg>';
const tutorialSteps = [
  {
    label: "Aamiya Jeshai",
    job: "Graduate Engineer Trainee, NOKIA",
    imgPath: Testi1,
    imgdef:
      "Faculties having years of expertise on various topics of ECE make learning experience special and flawless. Department always puts in continuous efforts to offer courses demanded by the industrial standards and to engage students in productive learning activities.",
  },
  {
    label: "Meghana Hari",
    job: "Applications Engineer, Oracle India Private Ltd.",
    imgPath: Testi2,
    imgdef:
      "When we step out from a school to a College we are of the impression that we are on our own and unlike in our school there is anybody to handhold us. But when I stepped into NITC my experience was quite different. The faculty and staffs of my department were always available to support us, to guide us and clear our doubts even beyond office hours. 24x7 lab facilities provided by the department was good relief for us, with our tight academic schedules, thanks to the support and commitment of the lab staffs, who were always with us at challenging times.",
  },
  {
    label: "R. S. Prasobh Sankar",
    job:
      " Pursuing Ph. D at Department of ECE, Indian Institute of Science Bangalore.",
    imgPath: Testi3,
    imgdef:
      "I had one of the best four years of my life during my B. Tech in ECE at NIT Calicut.  The faculties are very knowledgeable and put a lot of effort into teaching. They are very approachable and never hesitate to go that extra mile to make our journey better. The excellent level of academics, lab facilities, and the constant encouragement to do our best often lead to international level publications even at an undergraduate level. I can proudly say that the Department of ECE, NITC is one of the best in our country and leads to the overall development of our self, a fact which is reiterated by the ever-increasing list of success stories of our alumnus.",
  },
  {
    label: "Swetha A",
    job: "Software Engineer at Microsoft India",
    imgPath: Testi4,
    imgdef:
      "The Department with its supportive faculty has motivated me to explore and understand the various core subjects as well choose from a variety of electives that caters to different fields of interests. The labs as part of the curriculum helped me gain more insight into the domain with the challenges met as part of the experiment giving hands on experience and the help and support provided to guide us through the various projects gave a real eye opener as to how the textbook concepts fall in place in the real world scenario. Being one of the class representatives of my batch for over 4 semesters, I vouch that the facilities offered by the department right from the classrooms to the labs which we could utilise even outside the lab hours, the department level festivities, Industrial visit bringing cheer and the faculty who were supportive and guided us in the right direction for the 4 years that moulded us from a student out from school to a better person equipped with technical knowledge and life skills, I am lucky to be an alumnus from ECED, NITC.",
  },
  {
    label: "Umamaheswaran S",
    job: "Firmware Engineer at Itron India Pvt Ltd",
    imgPath: Testi5,
    imgdef:
      "The four years that I spent in the ECE Department gave me lot of memories to cherish for a life time.  I received immense help and support from faculties as well as other staffs all along the course particularly during the final year Major Project.  The academic curriculum is very well designed so as to impart the right amount of theoretical as well as practical knowledge to the students.",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const [userNotHover, setUserNotHover] = React.useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    if (userNotHover){
      setActiveStep(step);
    }
  };

  return (
    <Container maxWidth="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>TESTIMONIALS</h1>
      </div>
      <div onMouseEnter={()=>{setUserNotHover(false)}} onMouseLeave={()=>{setUserNotHover(true)}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <Box
            key={step.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                padding: "15px",
                display: "flex",
                backgroundSize: "cover",
                backgroundImage: "url('"+svgImg+"')",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    style={{ height: "140px", borderRadius: "50%" }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
                <div
                  style={{
                    backgroundColor: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Typography>{tutorialSteps[activeStep].label}</Typography>
                </div>
              </div>
              <Box style={{ padding: "15px" }}>
                <Typography variant="h6" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                  {tutorialSteps[activeStep].imgdef}
                  <br />
                  <br />
                  <b>{tutorialSteps[activeStep].job}</b>
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      </div>
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
    </Container>
  );
}

export default SwipeableTextMobileStepper;
