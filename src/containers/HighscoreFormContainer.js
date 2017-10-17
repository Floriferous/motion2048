import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import setName from '../actions/setName';

const validate = (values) => {
  const errors = {};

  if (values.name && values.name.length <= 3) {
    errors.name = 'Must be at least 3 characters long';
  } else if (values.name && values.name.length > 20) {
    errors.name = 'Must be less than 20 characters long';
  }

  return errors;
};

const mapStateToProps = state => ({
  initialValues: { name: state.appState.submittedName },
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
});

const HighscoreFormContainer = component =>
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({ form: 'submitHighscore', validate }),
  )(component);

export default HighscoreFormContainer;
