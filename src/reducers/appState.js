const initialState = 'home';

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return 'game';
    case 'END_GAME':
      return 'home';
    default:
      return state;
  }
};

export default appState;
