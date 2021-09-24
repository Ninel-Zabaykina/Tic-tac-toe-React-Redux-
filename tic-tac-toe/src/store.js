export const ACTION_TYPES = {
    START_NEW: 'start_new',
    TURN: 'turn'
}

const initialState = {
    squares: Array(9).fill(null),
    count: 0
}

const winnerLine = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.START_NEW:
        {
            return {...initialState};
        }
        case ACTION_TYPES.TURN: {
            let currentSquare = [...state.squares];
            if (currentSquare[action.payload] === null) {
                currentSquare[action.payload] = (state.count % 2 === 0) ? 'X' : 'O';
            }
            return {
                count: state.count + 1,
                squares:currentSquare
            };
        }
        default:
            return state;
    }
}

export const isWinnerSelector = (state) => {
    let s = (state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i<8; i++) {
        let line = winnerLine[i];
        if (state.squares[line[0]] === s
            &&state.squares[line[1]] === s
            && state.squares[line[2]] === s){
            return s;
        }
    }
    return;
}
