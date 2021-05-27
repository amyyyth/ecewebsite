import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AreasofResearch from "./AreasofResearch";
import AreasofResearchMob from "./AreasofResearchMob";

export default function ChooseAoR(){
    const matches = useMediaQuery('(min-width:840px)');

    if (matches){
        return <AreasofResearch />
    }
    else {
        return <AreasofResearchMob />
    }
}