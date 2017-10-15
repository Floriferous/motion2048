import getNewBoxDetails from '../js/getNewBoxDetails';
import setDirection from '../js/setDirection';
const initialState = [];

const gameState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [...state, getNewBoxDetails(state)];
    case 'SET_DIRECTION':
      return state.map((box, i, array) =>
        setDirection(box, array, action.newDirection),
      );
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export default gameState;
