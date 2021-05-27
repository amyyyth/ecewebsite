import { Component } from "react";
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PrimaryCarousel from "./Carouselfold/CarouselComp";
import Primarynews from "./Newsfold/Newsindex";
import Primaryqlinks from "./Quicklinks";
import { apiurl } from '../varconfig';

interface AppProps {
    isMobile: boolean
}
interface AppState {
    bodydata: {
        descops: string
    }
}

export default class Alumni extends Component<AppProps, AppState> {
    constructor(props: any){
        super(props);
        this.state = {
            bodydata: {
                descops: "<p>Loading...</p>"
            }
        }
    }

    componentDidMount(){
        fetch(apiurl+'/backend/alumni/getalbody/',
        {method: 'GET'}).then(
            response => response.json()
        ).then(
            result =>{
                this.setState({bodydata:result});
            }
        ).catch(error=>{console.log("Did not get Alumni body")})
    }

    albody = () => {
        return (
            <Card className="pdbga">
                <CardContent>
                    <div className={ "ql-container ql-snow" }>
                        <div className={ "ql-editor" } dangerouslySetInnerHTML={{ __html: this.state.bodydata.descops }}></div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    renderalChoose = () => {
        if (this.props.isMobile){
            return(
                <div>
                    <div id="carsamob">
                        <PrimaryCarousel url_slug="alumni" />
                    </div>
                    <div id="botcardsa">
                        <Container style={{  display: "flex", flexDirection:"column"}}>
                            <div id="newsindex">
                                <Primarynews url_slug="alumni" child_url="alumninews" />
                            </div>
                            <div id="mobdepro">
                                {this.albody()}
                            </div>
                        </Container>
                    </div>
                </div>
            )
        }
        else{
            return(
            <div>
                <div id="carsa">
                    <PrimaryCarousel url_slug="alumni" />
                </div>
                <div id="botcardsa">
                    <Container style={{ display: "flex"}}>
                        <div id="lmain">
                            {this.albody()}
                        </div>
                        <div id="rmain">
                            <div>
                                <Primaryqlinks />
                            </div>
                            <div id="newsindex">
                                <Primarynews url_slug="alumni" child_url="alumninews" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            )
        }
    }

    render(){
        return (
            <div>
                {this.renderalChoose()}
            </div>
        );
    }
}