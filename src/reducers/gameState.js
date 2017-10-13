const initialState = [];

const gameState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [
        ...state,
        {
          id: action.id,
          x: 0,
          y: 0,
        },
      ];
    default:
      return state;
  }
};

export default gameState;
