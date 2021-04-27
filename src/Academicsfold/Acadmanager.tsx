import useMediaQuery from "@material-ui/core/useMediaQuery";
import { lazy } from "react";

const Academics = lazy(()=>import("./Acadpage"));

interface FuncProps {
    heading: string,
    acadurl: string,
}

export default function ChooseAcad(props: FuncProps){
    const matches = useMediaQuery('(min-width:840px)');

    if (matches){
        return <Academics heading={props.heading} acadurl={props.acadurl} classname="acadbody" />
    }
    else {
        return <Academics heading={props.heading} acadurl={props.acadurl} classname="acadbodymob" />
    }
}