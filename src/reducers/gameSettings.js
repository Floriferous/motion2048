const initialState = {};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTING':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default gameSettings;
