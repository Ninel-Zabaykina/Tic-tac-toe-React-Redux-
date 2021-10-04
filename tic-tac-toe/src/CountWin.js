import {useState} from 'react';
import {useSelector} from "react-redux";
import {isWinnerSelector} from './store';

export default function CountWin ( ) {
    const [XWin ,setXWin] = useState(0);
    const [OWin ,setOWin] = useState(0);
    const CountWin = useSelector(isWinnerSelector);
    if (CountWin === 'X') {
        return (setXWin(XWin+1));
    }
    if (CountWin === 'O') {
        return (setOWin(OWin+1));
    }
}