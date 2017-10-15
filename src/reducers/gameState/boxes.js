import getNewBoxDetails from '../../js/getNewBoxDetails';
import setDirection from '../../js/setDirection';
import mergeBoxes from '../../js/mergeBoxes';
const initialState = [];

const boxes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [...state, getNewBoxDetails(state)];
    case 'MERGE_BOXES':
      return mergeBoxes(state, action.newDirection);
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

export default boxes;
