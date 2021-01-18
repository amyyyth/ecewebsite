import { Container } from "@material-ui/core";
import React, { useState, Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useMediaQuery } from "react-responsive";
import CircularProgress from '@material-ui/core/CircularProgress';

interface ActivityDetails {
  id: number;
  heading: string;
  descops: string;
  onPress?: (id: number) => void | undefined;
  isTwo?: boolean;
}

interface AppProps {}
interface AppState {
  apidata : {
    details: ActivityDetails[]
  },
  isLoadState: boolean
}

interface topass {
  details: ActivityDetails[]
}

function RightCard(activity: ActivityDetails) {
  
  return (
  <Card variant="outlined" style={{fontFamily: "Karla,sans-serif",}}>
    <CardContent>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center", marginBottom:"20px",marginTop:"15px"}}>
    <Typography variant="h4" style={{fontFamily: "Montserrat,sans-serif", fontWeight:"bolder"}}> {activity.heading} </Typography>
      </div>
      <Container>
          <div className={ "ql-container ql-snow" }>
              <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: activity.descops }}></div>
        </div>
      </Container>
    </CardContent>
  </Card>
  );
}

function LeftTabCard(activity: ActivityDetails) {
  return (
  
    <Card
      variant="outlined"
      onClick={() => {
        if (activity.onPress) activity.onPress(activity.id);
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
          if (activity.onPress) activity.onPress(activity.id);
        }}
      >
        <CardContent style={{ padding: "5px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
            <Typography variant="h5" style={{fontFamily:"Montserrat",fontWeight:"bolder"}}> {activity.heading} </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Impfunction(dataFull: topass) {
  const [filtered, setFiltered] = useState<[ActivityDetails | undefined]>([
    undefined,
  ]);
  const [rId, setrId] = useState(1); // id for HOD
  const [Query, setQuery] = useState("");
  const isOne = useMediaQuery({ query: "(max-width: 900px)" });
  const isTwo = useMediaQuery({ query: "(max-width: 730px)" });
  const [openRes, setopenRes] = useState(false);
  
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let query = event.currentTarget.value;
    setQuery(query);
    let f: [ActivityDetails | undefined] = [undefined];
    for (let data in dataFull.details) {
      if (dataFull.details[data].heading.toLowerCase().includes(query.toLowerCase()))
        f.push(dataFull.details[data]);
    }
    setFiltered(f);
  }
  function leftPress(id: number) {
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
            style={{ overflowY: "scroll", height: isTwo ? "55vh" : "85vh" }}
          >
            {Query !== "" && filtered.length === 1 ? (
              <Typography> No Faculy Matches your search </Typography>
            ) : Query === "" ? (
              dataFull.details.map((item1) => {
                return (
                  
                  <LeftTabCard
                    id={item1.id}
                    heading = {item1.heading}
                    descops={item1.descops}
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
                    heading = {item2.heading}
                    descops = {item2.descops}
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
              heading = {item1.heading}
              descops={item1.descops}
              />
            );
          else return null;
        })}
      </Container>
    </Container>
  );
}

export default class Activityapp extends Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state = {
        apidata: { details :[
          {
            id: 1,
            heading: 'Activity 1',
            descops: '<p>Activity 1 description</p>'
          },
          {
            id: 2,
            heading: 'Activity 2',
            descops: '<p>Activity 2 description</p>'
          }
        ]
      },
      isLoadState: true
    }};
/*
  componentDidMount(){
    fetch('https://eced.herokuapp.com/backend/activity/allfac/',
      {method: 'GET'}
    ).then(
      response => response.json()
      ).then(result =>{
        this.setState({apidata:result});
        this.setState({isLoadState:true});
      }).catch(error=>{console.log("Did not get activity details")})
  };
*/
  getactivity = () => {
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
          this.getactivity()
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }} >
            <CircularProgress />
              <h4>Getting Activities...</h4>
          </div>
        )
      }
      </div>
    );
  }
}