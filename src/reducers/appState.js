const initialState = { view: 'home' };

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, view: 'game' };
    case 'END_GAME':
      return { ...state, view: 'score' };
    case 'GO_HOME':
      return { ...state, view: 'home' };
    case 'SET_NAME':
      return { ...state, submittedName: action.name };
    default:
      return state;
  }
};

export default appState;
