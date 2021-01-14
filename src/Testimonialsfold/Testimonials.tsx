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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  //datas for the testimoniel
  {
    label: "Name1",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    imgdef:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque."
  },
  {
    label: "Name2",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    imgdef:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque."
  },
  {
    label: "Name3",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    imgdef:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque."
  },
  {
    label: "Name4",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    imgdef:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque."
  },
  {
    label: "Name5",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    imgdef:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione a at esse. Tempora facilis amet nam voluptatem. Nulla quidem enim odio quas itaque vero soluta, ut aperiam, voluptates, cumque doloremque."
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
    // backgroundColor: theme.palette.background.default
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
    //the blue box containing everything
    backgroundColor: "#fefefe",
    height: "300px",
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    borderRadius: 10,
    // padding: 20,
    margin: "2%",
    textAlign: "center",
    overflow: "hidden"
    //boxShadow: {"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"},
  },

  incard: {
    //the box containing black,brown&green divs
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
    //containing black and brown boxes
    width: "17%",
    height: "100%",
    position: "relative",
    left: "-10%"
    // maxWidth: '180px'
  },
  imgdiv: {
    //blackbox
    backgroundColor: "none",
    width: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  namediv: {
    //brownbox
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
    //greenbox
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