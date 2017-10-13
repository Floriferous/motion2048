const initialState = [];

const highScore = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HIGHSCORE':
      return [...state, { score: action.score, createdAt: new Date() }];
    default:
      return state;
  }
};

export default highScore;
