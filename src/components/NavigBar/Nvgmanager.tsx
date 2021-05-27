import useMediaQuery from "@material-ui/core/useMediaQuery";
import PrimaryNavBar from "./Nvgbar";
import MobileNavBar from "./Mobnvgbar";

export default function Choosenav(){
    const matches = useMediaQuery('(min-width:840px)');
    if (matches) {
        return <PrimaryNavBar />;
    }
    else {
        return <MobileNavBar />;
    }
}