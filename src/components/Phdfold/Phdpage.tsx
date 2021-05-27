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
import CircularProgress from '@material-ui/core/CircularProgress';
import LaunchIcon from '@material-ui/icons/Launch';
import logo from '../../Mediafold/person.jpg';
import "./phd.css";
import { apiurl } from '../../varconfig';
import Rajpath from "../../Mediafold/rajpath.jpg";

interface StaffDetails {
  id: number;
  profile_pic: string;
  display_name: string;
  aow: string;
  email: string;
  ext_link: string;
  onPress?: (id: number) => void | undefined;
  isTwo?: boolean;
}

interface AppProps {}
interface AppState {
  apidata : {
    details: StaffDetails[]
  },
  isLoadState: boolean
}

interface topass {
  details: StaffDetails[]
}

function LeftTabCard(staff: StaffDetails) {
  return (
    <Card
      variant="outlined"
      onClick={() => {
        if (staff.onPress) staff.onPress(staff.id);
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
          if (staff.onPress) staff.onPress(staff.id);
        }}
      >
        <CardContent style={{ padding: "5px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{display:"flex", alignItems:"center"}}>
            {staff.profile_pic===""?
            <CardMedia><img src={logo} style={{ height: "100px" }} alt={"staff"} /></CardMedia>
            :
            <CardMedia><img src={staff.profile_pic} style={{ width: "100px" }} alt={"staff"} /></CardMedia>}
            </div>
            <div>
              <TableContainer>
              <Table size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h5" style={{fontFamily:"Montserrat",fontWeight:"bolder"}}>
                          {staff.display_name} &nbsp;
                          <a href={staff.ext_link} target="_blank" rel="noreferrer"><LaunchIcon color="primary" /></a>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {staff.aow} </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">
                        {" "}
                        <Typography variant="h6"> {staff.email} </Typography>
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
  const [filtered, setFiltered] = useState<[StaffDetails | undefined]>([
    undefined,
  ]);
  const [Query, setQuery] = useState("");
  const isOne = useMediaQuery({ query: "(max-width: 900px)" });
  const isTwo = useMediaQuery({ query: "(max-width: 730px)" });
  const [openRes, setopenRes] = useState(true);
  
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let query = event.currentTarget.value;
    setQuery(query);
    let f: [StaffDetails | undefined] = [undefined];
    for (let data in dataFull.details) {
      if (dataFull.details[data].display_name.toLowerCase().includes(query.toLowerCase()))
        f.push(dataFull.details[data]);
    }
    setFiltered(f);
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
              <Typography> No student Matches your search </Typography>
            ) : Query === "" ? (
              dataFull.details.map((item1) => {
                return (
                  <LeftTabCard
                    key={item1.id}
                    id={item1.id}
                    profile_pic = {item1.profile_pic}
                    display_name={item1.display_name}
                    aow = {item1.aow}
                    email = {item1.email}
                    ext_link = {item1.ext_link}
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
                    aow = {item2.aow}
                    email = {item2.email}
                    ext_link = {item2.ext_link}
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
          backgroundColor: "#fff",
          padding: isOne ? "20px" : "40px",
          marginTop: isTwo ? "80px" : "0px",
        }}
      >
          <img height="100%" width="100%" src={Rajpath} alt="staff dept img"></img>
      </Container>
    </Container>
  );
}

export default class Phdapp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: { details :[
          {
            id: 0,
            profile_pic: '',
            display_name: 'Loading...',
            aow: 'Loading...',
            email: 'Loading...',
            ext_link: 'Loading'
          }
        ]
      },
      isLoadState: false
    }};

  componentDidMount(){
    fetch(apiurl+'/backend/phd/allphd/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
        this.setState({isLoadState:true});
      }).catch(error=>{console.log("Did not get Staff details")})
  };

  getstaff = () => {
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
          this.getstaff()
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }} >
            <CircularProgress />
              <h4>Getting PhD student details...</h4>
          </div>
        )
      }
      </div>
    );
  }
}