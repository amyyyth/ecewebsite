import { Container } from "@material-ui/core";
import React, { useState, Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { useMediaQuery } from "react-responsive";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import logo from '../../Mediafold/person.jpg';
import "./faculty.css";
import { apiurl } from '../../varconfig';
import Triangle from "../../Mediafold/triangle.svg";

interface FacultyDetails {
  id: number;
  profile_pic: string;
  display_name: string;
  designation: string;
  room: string;
  email: string;
  phone: string;
  aoi: string;
  cards?: {
    heading: string;
    descops: string;
  }[];
  onPress?: (id: number) => void | undefined;
  isTwo?: boolean;
}

interface Section {
  heading: string;
  descops: string;
}

interface AppProps {}
interface AppState {
  apidata : {
    details: FacultyDetails[]
  },
  isLoadState: boolean
}

interface topass {
  details: FacultyDetails[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin:"0px"
    }
  })
);
function RightCard(faculty: FacultyDetails) {
  const classes = useStyles();
  
  function showcards(cards: Section[] | undefined){
    if (cards) {
      return(
        cards.map(function(pobj,index){
          return (
            <Container key={index} style={{ paddingLeft: "0px", paddingRight:"0px" }}>
            <div>
              <Accordion>
                <AccordionSummary
                classes={{
                  content: classes.content
                }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{marginTop:"10px"}}
                >
                  <h3>{ pobj.heading }</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={ "ql-container ql-snow" }>
                    <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: pobj.descops }}></div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            </Container>
          );
        })
      )
    }
    else{
      return (<p><br></br></p>)
    }
  }

  if(faculty){
    return (
      <Card variant="outlined" style={{fontFamily: "Karla,sans-serif",}}>
        <CardContent>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center", marginBottom:"20px",marginTop:"15px"}}>
          <Typography variant="h4" style={{fontFamily: "Montserrat,sans-serif", fontWeight:"bolder"}}> {faculty.display_name} </Typography>
          <Typography variant="h5" > {faculty.designation} </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom:"15px"
            }}
          >
            {faculty.profile_pic===""?
                <CardMedia><img src={logo} style={{ height: "125px" }} alt={"Faculty"} /></CardMedia>
                :
                <CardMedia><img src={faculty.profile_pic} style={{ width: "125px" }} alt={"Faculty"} /></CardMedia>}
          </div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"> Room </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Typography variant="h6" > {faculty.room} </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"> Email </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <a href={"mailto:"+faculty.email}><Typography variant="h6" style={{fontWeight:"bold",color:"#26a69a"}}> {faculty.email} </Typography></a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"> Phone </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Typography variant="h6" style={{fontWeight:"bold"}}> {faculty.phone} </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"> Areas of Interest </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Typography variant="h6" > {faculty.aoi} </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {showcards(faculty.cards)}
        </CardContent>
      </Card>
      
    );
  }
  else{
    return(
      <Card variant="outlined" style={{fontFamily: "Karla,sans-serif",}}>
        <CardContent>
        <div
            style={{
              display: "flex",
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: "center",
              marginBottom:"15px"
            }}
          >
            <div style={{width: '200px'}}>
              <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Calicut_Logo.png"/>
            </div>
            <div>
            <Typography variant="h4" style={{fontFamily: "Montserrat,sans-serif", fontWeight:"bolder"}}> Faculty Details </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

}

function LeftTabCard(faculty: FacultyDetails) {
  return (
    <Card
      variant="outlined"
      onClick={() => {
        if (faculty.onPress) faculty.onPress(faculty.id);
      }}
      style={{
        marginTop: "10px",
      }}
    >
      <CardActionArea
        style={{
          margin: "0px",
        }}
        onClick={() => {
          if (faculty.onPress) faculty.onPress(faculty.id);
        }}
      >
        <CardContent style={{ padding: "5px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{display:"flex", alignItems:"center"}}>
            {faculty.profile_pic===""?
            <CardMedia><img src={logo} style={{ height: "100px" }} alt={"Faculty"} /></CardMedia>
            :
            <CardMedia><img src={faculty.profile_pic} style={{ width: "100px" }} alt={"Faculty"} /></CardMedia>}
            </div>
            <div>
              <TableContainer>
              <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h5" style={{fontFamily:"Montserrat",fontWeight:"bolder"}}> {faculty.display_name} </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {faculty.designation} </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {"Areas of Interest: "+faculty.aoi} </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Impfunction(dataFull: topass) {
  const [filtered, setFiltered] = useState<[FacultyDetails | undefined]>([
    undefined,
  ]);
  const [rId, setrId] = useState(0);
  const [Query, setQuery] = useState("");
  const isOne = useMediaQuery({ query: "(max-width: 900px)" });
  const isTwo = useMediaQuery({ query: "(max-width: 730px)" });
  const [openRes, setopenRes] = useState(true);
  const [rightImg,setrightImg] = useState(true);
  
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let query = event.currentTarget.value;
    setQuery(query);
    let f: [FacultyDetails | undefined] = [undefined];
    for (let data in dataFull.details) {
      if (dataFull.details[data].display_name.toLowerCase().includes(query.toLowerCase()))
        f.push(dataFull.details[data]);
    }
    setFiltered(f);
  }
  function leftPress(id: number) {
    setrId(id);
    setrightImg(false);
  }
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop:"15px",
        padding: "0px",
        minHeight: "100vh",
        maxHeight: "105vh",
        overflowY: "auto",
        justifyContent: "center",
      }}
    >
      <Container
        style={{
          overflowY: "hidden",
          backgroundColor: "#fff",
          padding: isTwo ? "0px" : isOne ? "20px" : "40px",
          position: isTwo ? "absolute" : "inherit",
          zIndex: isTwo ? 10 : 0,
          width: isTwo ? "90%" : "100%",
          overflowX: "hidden",
          paddingBottom: "0px",
          marginBottom: "20px"
        }}
      >
        <TextField
          id="standard-basic"
          label="Search"
          variant="outlined"
          onChange={handleChange}
          style={{ marginLeft: isTwo ?"0px":"25px", width: isTwo ? "100%" : "89%" ,backgroundColor:"#bffcf8"}}
          onFocus={() => {
            setopenRes(true);
          }}
          onBlur={() => {
            setTimeout(() => setopenRes(false), 300);
          }}
        />
        {((isTwo && openRes) || !isTwo) && (
          <Container
            style={{ overflowY: "scroll", height: isTwo ? "75vh" : "85vh" }}
          >
            {Query !== "" && filtered.length === 1 ? (
              <Typography> No Faculy Matches your search </Typography>
            ) : Query === "" ? (
              dataFull.details.map((item1) => {
                return (
                  <LeftTabCard
                    key={item1.id}
                    id={item1.id}
                    profile_pic = {item1.profile_pic}
                    display_name={item1.display_name}
                    designation = {item1.designation}
                    room = {item1.room}
                    email = {item1.email}
                    phone={item1.phone}
                    aoi = {item1.aoi}
                    cards = {item1.cards}
                    onPress={leftPress}
                  />
                );
              })
            ) : (
              filtered.map((item2) => {
                if (item2 !== undefined)
                  return (
                    <LeftTabCard
                    key={item2.id}
                    id={item2.id}
                    profile_pic = {item2.profile_pic}
                    display_name={item2.display_name}
                    designation = {item2.designation}
                    room = {item2.room}
                    email = {item2.email}
                    phone={item2.phone}
                    aoi = {item2.aoi}
                    cards = {item2.cards}
                    onPress={leftPress}
                    />
                  );
                else return null;
              })
            )}
          </Container>
        )}
      </Container>

      <Container
        style={{
          overflowY: "auto",
          backgroundColor: "#fff",
          padding: isOne ? "20px" : "40px",
          marginTop: isTwo ? "80px" : "0px",
        }}
      >
        {
          (rightImg) ? (
            // <img height="100%" width="100%" src={Triangle} alt="faculty dept img"></img>
            <Card variant='outlined' style={{fontFamily: "Karla,sans-serif",}}>
                <CardContent>
                <div
                    style={{
                      display: "flex",
                      flexDirection: 'column',
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom:"15px",
                      paddingTop: '30px',
                      paddingBottom: '30px'
                    }}
                  >
                    <div style={{width: '200px', marginBottom: '50px'}}>
                      <img style={{width: '100%'}} src="https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Calicut_Logo.png"/>
                    </div>
                    <div>
                    <Typography variant="h4" style={{fontFamily: "Montserrat,sans-serif", fontWeight:"bolder"}}> Faculty Details </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
          ):(
            dataFull.details.map((item1) => {
              if (item1.id === rId){
                return (
                  <RightCard
                    key={item1.id}
                    id={item1.id}
                    profile_pic = {item1.profile_pic}
                    display_name={item1.display_name}
                    designation = {item1.designation}
                    room = {item1.room}
                    email = {item1.email}
                    phone={item1.phone}
                    aoi = {item1.aoi}
                    cards = {item1.cards}
                  />
                );
              }
              else return null; 
            })
          )
        }
      </Container>
    </Container>
  );
}

export default class Facultyapp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: { details :[
          {
            id: 0,
            profile_pic: '',
            display_name: 'Loading...',
            designation: 'Loading...',
            room: 'Loading...',
            email: 'Loading...',
            phone: 'Loading...',
            aoi: 'Loading...',
            cards: [{
              heading: 'Loading...',
              descops: 'Loading...'
            }]
          }
        ]
      },
      isLoadState: false
    }};

  componentDidMount(){
    fetch(apiurl+'/backend/faculty/allfac/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
        this.setState({isLoadState:true});
      }).catch(error=>{console.log("Did not get Faculty details")})
  };

  getfaculty = () => {
    return (
      <div>
        <Impfunction 
          {...this.state.apidata}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
      {
        this.state.isLoadState ? (
          this.getfaculty()
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }} >
            <CircularProgress />
              <h4>Getting faculty details...</h4>
          </div>
        )
      }
      </div>
    );
  }
}