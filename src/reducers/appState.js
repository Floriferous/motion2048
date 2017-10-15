const initialState = 'home';

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return 'game';
    case 'END_GAME':
      return 'score';
    case 'GO_HOME':
      return 'home';
    default:
      return state;
  }
};

export default appState;
