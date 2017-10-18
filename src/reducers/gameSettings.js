const initialState = {
  damping: 15,
  stiffness: 200,
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTING':
      return { ...state, [action.name]: action.value };
    case 'TOGGLE_MODAL':
      return { ...state, modalIsOpen: !state.modalIsOpen };
    default:
      return state;
  }
};

export default gameSettings;
