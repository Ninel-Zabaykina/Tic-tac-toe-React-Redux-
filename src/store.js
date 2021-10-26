export const ACTION_TYPES = {
    START_NEW: 'start_new',
    TURN: 'turn',
    INCREMENT_X: 'inc_x',
    INCREMENT_O: 'inc_o',
}

export const initialState = {
    squares: Array(9).fill(null),
    count: 0,
    win_x: 0,
    win_o: 0
}

const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.START_NEW: {
            return {...initialState};
        }
        case ACTION_TYPES.TURN: {
            let currentSquare = [...state.squares];
            if (currentSquare[action.payload] === null) {
                currentSquare[action.payload] = (state.count % 2 === 0) ? 'X' : 'O';
            }
            return {
                ...initialState,
                count: state.count + 1,
                squares: [...currentSquare],
            }
        }
        case ACTION_TYPES.INCREMENT_O: {
            return {...initialState, win_o: state.win_o + 1}
        }
        case ACTION_TYPES.INCREMENT_X: {
            return {...initialState, win_x: state.win_x + 1}
        }
        default:
            return state;
    }
}

export const isWinnerSelector = state => {
    let s = (state.count % 2 === 0) ? 'O' : 'X';
    for (let i = 0; i < winnerLine.length; i++) {
        let line = winnerLine[i];
        console.log("selector", s, state.squares[line[0]], state.squares[line[1]], state.squares[line[2]]);
        if (state.squares[line[0]] === s
            && state.squares[line[1]] === s
            && state.squares[line[2]] === s) {
            return s;
        }
    }
}

