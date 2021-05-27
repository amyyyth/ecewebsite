import useMediaQuery from "@material-ui/core/useMediaQuery";
import { lazy } from "react";

const Static = lazy(()=>import("./Staticapp"));

interface FuncProps {
    urlslug: string
}

export default function Choosestaticpage(props: FuncProps){
    const matches = useMediaQuery('(min-width:840px)');

    return <Static urlslug={props.urlslug} isDesk={matches} />
}