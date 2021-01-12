import { Container } from "@material-ui/core";
import React, { useState, Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useMediaQuery } from "react-responsive";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./faculty.css";

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
  }
}

interface topass {
  details: FacultyDetails[]
}

function RightCard(faculty: FacultyDetails) {
  function showcards(cards: Section[] | undefined){
    if (cards) {
      return(
        cards.map(function(pobj,index){
          return (
            <Container style={{ paddingLeft: "0px", paddingRight:"0px" }}>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
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
  return (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h4"> {faculty.designation} </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia>
          <img src={faculty.profile_pic} style={{ width: "100px" }} alt={"Faculty"} />
        </CardMedia>
      </div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h5"> Name </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h5"> {faculty.display_name} </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h5"> Room </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h5"> {faculty.room} </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h5"> Email </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h5"> {faculty.email} </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h5"> Phone </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h5"> {faculty.phone} </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography variant="h5"> Areas of Interest </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography variant="h5"> {faculty.aoi} </Typography>
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

function LeftTabCard(faculty: FacultyDetails) {
  return (
  <div className={"fac"}>
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
            <CardMedia><img src={faculty.profile_pic} style={{ height: "100px" }} alt={"Faculty"} /></CardMedia>
            <div>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableRow>
                    <TableCell align="left">
                      {" "}
                      <Typography variant="h6"> {faculty.display_name} </Typography>
                    </TableCell>
                  </TableRow>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {faculty.designation} </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {faculty.email} </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {faculty.phone} </Typography>
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
  </div>
  );
}

function Impfunction(dataFull: topass) {
  const [filtered, setFiltered] = useState<[FacultyDetails | undefined]>([
    undefined,
  ]);
  const [rId, setrId] = useState(1); // 0 id for HOD
  const [Query, setQuery] = useState("");
  const isOne = useMediaQuery({ query: "(max-width: 900px)" });
  const isTwo = useMediaQuery({ query: "(max-width: 730px)" });
  const [openRes, setopenRes] = useState(false);
  
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let query = event.currentTarget.value;
    setQuery(query);
    console.log(query);
    let f: [FacultyDetails | undefined] = [undefined];
    for (let data in dataFull.details) {
      if (dataFull.details[data].display_name.toLowerCase().includes(query.toLowerCase()))
        f.push(dataFull.details[data]);
    }
    setFiltered(f);
  }
  function leftPress(id: number) {
    setrId(id);
  }
  function leftPress1(id: number) {
    setopenRes(false);
    setrId(id);
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
        maxHeight: "100vh",
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
            style={{ overflowY: "scroll", height: isTwo ? "55vh" : "85vh" }}
          >
            {Query !== "" && filtered.length === 1 ? (
              <Typography> No Faculy Matches your search </Typography>
            ) : Query === "" ? (
              dataFull.details.map((item1) => {
                return (
                  
                  <LeftTabCard
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
        {dataFull.details.map((item1) => {
          if (item1.id === rId)
            return (
              <RightCard
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
          else return null;
        })}
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
      }
    }};

  componentDidMount(){
    fetch('http://localhost:8000/backend/faculty/allfac/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
      }).catch(error=>{console.log("Did not get Faculty details")})
  };

  render() {
    return (
      <div>
        <Impfunction 
          {...this.state.apidata}
        />
      </div>
    );
  }

}