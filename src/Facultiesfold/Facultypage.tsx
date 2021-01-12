import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import person from "./person.jpg";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useMediaQuery } from "react-responsive";
import "./faculty.css";

interface FacultyDetails {
  id: number;
  Name: string;
  Email: string;
  Phone: string;
  resVar?: number; //1:900px 2:
  Details?: string | undefined;
  onPress?: (id: number) => void | undefined;
  Publications?: string;
  isTwo?: boolean;
}
function LeftTabCard(faculty: FacultyDetails) {
  //add image later
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
            <CardMedia>
              <img src={person} style={{ width: "100px" }} alt={"Faculty"} />
            </CardMedia>
            <div>
            <TableContainer>
          <Table aria-label="simple table">
          <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6"> Name </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h6"> {faculty.Name} </Typography>
                </TableCell>
              </TableRow>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6"> Email </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h6"> {faculty.Email} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6"> Phone </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h6"> {faculty.Phone} </Typography>
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
interface Section {
  name: string;
  value: string;
}
function Row(props: Section) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {props.value}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function RightCard(faculty: FacultyDetails) {
  //add image later depending on whether the image is blob or url??
  console.log(faculty.Publications);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4"> {faculty.Name} </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia>
            <img src={person} style={{ width: "100px" }} alt={"Faculty"} />
          </CardMedia>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h5"> Email </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h5"> {faculty.Email} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h5"> Phone </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h5"> {faculty.Phone} </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h5"> Details </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography variant="h5"> {faculty.Details} </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableBody>
              {faculty.Publications ? (
                <Row name={"Publications"} value={faculty.Publications} />
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Can add other details using Table from material ui depending on the format of data from api ref: https://codesandbox.io/s/kbcee?file=/demo.js */}
      </CardContent>
    </Card>
  );
}

export default function Facultyapp() {
  const [filtered, setFiltered] = useState<[FacultyDetails | undefined]>([
    undefined,
  ]);
  const [rId, setrId] = useState(0); // 0 id for HOD
  const [Query, setQuery] = useState("");
  const isOne = useMediaQuery({ query: "(max-width: 900px)" });
  const isTwo = useMediaQuery({ query: "(max-width: 730px)" });
  const [openRes, setopenRes] = useState(false);
  const dataFull: FacultyDetails[] = [
    {
      id: 0,
      Name: "HOD",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
      Publications:
        "Rambabu Katla and A.V. Babu, Multihop Full Duplex Relaying with Coherent Signaling: Outage Probability Analysis and Power Optimization, Ad Hoc Networks, vol. 97, Feb 2020, pp. 1-13.\r\n\nV. Aswathi and A. V. Babu, Ensuring Equal Outage Performance for Down-link Secondary Users in Full/Half Duplex Cognitive NOMA Systems, IET Communications, vol. 14, issue 1, pp. 63&ndash;75, Jan 2020 (DOI: 10.1049/iet-com.2019.0055).\r\n\nUpama Rajan M.N. and Babu A.V., Combining Contention based Access and Dynamic Service Period Allocation for Performance Improvements in IEEE 802.11ad mmWave WLAN, International journal of Communication Systems (Wiley), 2020;e4304, pp. 1-24.\r\n\nU. Sangeetha and A.V. Babu, Fair and Efficient Resource Allocation in IEEE 802.11ah WLAN with Heterogeneous Data Rates, Computer Communications, 151, 2020, pp. 154&ndash;164.\r\n\nAswathi V., and Babu A. V., Non-Orthogonal Multiple Access in Full Duplex based Coordinated Direct and Relay Transmission (CDRT) System: Performance Analysis and Optimization, EURASIP Journal on Wireless Communications and Networking, (2020) 2020:24, pp. 1-27.\r\n\nV. Aswathi, and A. V. Babu, Full/Half Duplex Cooperative NOMA under Imperfect Successive Interference Cancellation and Channel State Estimation Errors, IEEE Access, vol. 7, Dec 2019, pp.179961 &ndash; 179984.\r\n\nShubham Bisen and A.V. Babu, Outage analysis of underlay cognitive NOMA system with cooperative full duplex relaying, Transactions on Emerging Telecommunication Technologies, vol. 30, issue 12, Dec. 2019, pp. 1-22.",
    },
    {
      id: 1,
      Name: "Dr. One",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 2,
      Name: "Dr. Two",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 3,
      Name: "Mr. Three",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 4,
      Name: "Four",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 5,
      Name: "Five",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 6,
      Name: "Six",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 7,
      Name: "Seven",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details: "sdfasdfssd fsasdfadsf ",
    },
    {
      id: 8,
      Name: "Eight",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 9,
      Name: "Nine",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details: "sdfasdfssd fsasdfadsf ",
    },
    {
      id: 10,
      Name: "Ten",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 11,
      Name: "Eleven",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 12,
      Name: "Twelve",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
    {
      id: 13,
      Name: "Thirteen",
      Email: "facultyone@nitc.ac.in",
      Phone: "9458523617",
      Details:
        "asfasdfsa adsfasdfasdfas dfasdf adsfasdf adsfasd fasdfasdfasd fasdfasd fasdfasfa sdfasdfsadf asdfasdfsadf a",
    },
  ];
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let query = event.currentTarget.value;
    setQuery(query);
    console.log(query);
    let f: [FacultyDetails | undefined] = [undefined];
    for (let data in dataFull) {
      if (dataFull[data].Name.toLowerCase().includes(query.toLowerCase()))
        f.push(dataFull[data]);
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
              dataFull.map((item1) => {
                return (
                  <LeftTabCard
                    id={item1.id}
                    Name={item1.Name}
                    Phone={item1.Phone}
                    Email={item1.Email}
                    Details={item1.Details}
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
                      Name={item2.Name}
                      Phone={item2.Phone}
                      Email={item2.Email}
                      Details={item2.Details}
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
        {dataFull.map((item1) => {
          if (item1.id === rId)
            return (
              <RightCard
                id={item1.id}
                Name={item1.Name}
                Phone={item1.Phone}
                Email={item1.Email}
                Details={item1.Details}
                Publications={item1.Publications}
              />
            );
          else return null;
        })}
      </Container>
    </Container>
  );
}