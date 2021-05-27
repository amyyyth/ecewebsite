import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Deskhome from "./Homepage";
import Mobhome from "./Mobhomepage";

export default function Choosehome(){
    const matches = useMediaQuery('(min-width:840px)');

    if (matches){
        return <Deskhome />
    }
    else {
        return <Mobhome />
    }
}