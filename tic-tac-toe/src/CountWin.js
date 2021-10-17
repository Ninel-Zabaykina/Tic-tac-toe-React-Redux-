
import {useSelector} from "react-redux";

export default function CountWin ( ) {
    const XXX = useSelector((state) => state.win_x);
    const OOO = useSelector((state) => state.win_o);

    return(
        <div>
            X score {XXX} - O score {OOO}
        </div>
    )
}

