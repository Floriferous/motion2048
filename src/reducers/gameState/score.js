const initialState = 0;

const score = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCORE':
      return action.score;
    default:
      return state;
  }
};

export default score;
