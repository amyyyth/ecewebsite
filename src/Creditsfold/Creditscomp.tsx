import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';

import Djangologo from "./django.png";
import Reactlogo from "./React.png";
import Pythonlogo from "./Python.png";
import Tslogo from "./Ts.png";
import Muilogo from "./materialui.png";

import Suraj from "./suraj.jpg";
import Vimal from "./vimal.jpg";
import Devimg1 from "./devimg(1).jpeg";
import Devimg2 from "./devimg(2).jpeg";
import Devimg3 from "./devimg(3).jpeg";
import Devimg4 from "./devimg(4).jpeg";
import Devimg5 from "./devimg(5).jpeg";
import Devimg6 from "./devimg(6).jpeg";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
        height: "70px",
        borderRadius: "40px",
        fontSize: "18px"
    },
    techchip:{
        margin: theme.spacing(0.5),
    },
    bcontent: {
        paddingBottom: "50px"
    }
  }),
);

export default function Creditspage() {
    const classes = useStyles();
    return (
    <div>
        <h1 style={{ paddingLeft: "40px", paddingTop: "40px", color: "#03205c" }}>
            Credits
        </h1>
        <Container className="acadbody" maxWidth="md">
            <Card className="pdbga">
                <CardContent>
                    <div className={classes.bcontent}>
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Advisors
                        </Typography>
                        <Paper component="ul" className={classes.root}>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Lintu" >L</Avatar>}
                                label="Dr. Lintu Rajan"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Sudeep"  >S</Avatar>}
                                label="Dr. Sudeep P.V."
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                        </Paper>
                    </div>
                    <div className={classes.bcontent}>
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Project Head
                        </Typography>
                        <Paper component="ul" className={classes.root}>
                            <li>
                                <a href="https://www.linkedin.com/in/suraj-s-nitc">
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Suraj" src={Suraj}  />}
                                label="Suraj S"
                                className={classes.chip}
                                color="primary"
                                />
                                </a>
                            </li>
                        </Paper>
                    </div>
                    <Divider />
                    <div className={classes.bcontent}>
                        <div className="techstack">
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Frontend developers
                        <Chip
                            variant="outlined"
                            size="medium"
                            avatar={<Avatar alt="Mui logo" src={Muilogo}  />}
                            label="Material-UI"
                            className={classes.techchip}
                            color="primary"
                        />
                        <Chip
                            variant="outlined"
                            size="medium"
                            avatar={<Avatar alt="React logo" src={Reactlogo}  />}
                            label="React"
                            className={classes.techchip}
                            color="primary"
                        />
                        <Chip
                            variant="outlined"
                            size="medium"
                            avatar={<Avatar alt="Ts logo" src={Tslogo}  />}
                            label="Typescript"
                            className={classes.techchip}
                            color="primary"
                        />
                        </Typography>
                        </div>
                        <Paper component="ul" className={classes.root}>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Vimal Joseph" src={Vimal}  />}
                                label="Vimal Joseph"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/suraj-s-nitc">
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Suraj" src={Suraj}  />}
                                label="Suraj S"
                                className={classes.chip}
                                color="primary"
                                />
                            </a>
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Amith G" src={Devimg2}  />}
                                label="Amith G"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Harikrishnan K" src={Devimg5}  />}
                                label="Harikrishnan K"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                        </Paper>
                    </div>
                    <Divider />
                    <div className={classes.bcontent}>
                        <div className="techstack">
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Backend developers
                        <Chip
                            variant="outlined"
                            size="medium"
                            avatar={<Avatar alt="Django logo" src={Djangologo}  />}
                            label="Django"
                            className={classes.techchip}
                            color="primary"
                        />
                        <Chip
                            variant="outlined"
                            size="medium"
                            avatar={<Avatar alt="Python logo" src={Pythonlogo}  />}
                            label="Python"
                            className={classes.techchip}
                            color="primary"
                        />
                        </Typography>
                        </div>
                        <Paper component="ul" className={classes.root}>
                            <li>
                            <a href="https://www.linkedin.com/in/suraj-s-nitc">
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Suraj" src={Suraj}  />}
                                label="Suraj S"
                                className={classes.chip}
                                color="primary"
                                />
                            </a>
                            </li>
                        </Paper>
                    </div>
                    <Divider />
                    <div className={classes.bcontent}>
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Design
                        </Typography>
                        <Paper component="ul" className={classes.root}>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Vimal Joseph" src={Vimal}  />}
                                label="Vimal Joseph"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Amith G" src={Devimg2}  />}
                                label="Amith G"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Sharan" src={Devimg1}  />}
                                label="Sharan"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Amit Kumar" src={Devimg4}  />}
                                label="Amit Kumar"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                        </Paper>
                    </div>
                    <Divider />
                    <div className={classes.bcontent}>
                        <Typography variant="h5" style={{fontFamily:"Montserrat,sans-serif",marginTop:"5vh"}}>
                        Data entry and content
                        </Typography>
                        <Paper component="ul" className={classes.root}>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Sharan" src={Devimg1}  />}
                                label="Sharan"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Amit Kumar" src={Devimg4}  />}
                                label="Amit Kumar"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Adwaith" src={Devimg6}  />}
                                label="Adwaith"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                            <li>
                                <Chip
                                size="medium"
                                avatar={<Avatar alt="Laxman Chinnavar" src={Devimg3}  />}
                                label="Laxman Chinnavar"
                                className={classes.chip}
                                color="primary"
                                />
                            </li>
                        </Paper>
                    </div>
                    <Divider />
                </CardContent>
            </Card>
        </Container>
      </div>
    );
}