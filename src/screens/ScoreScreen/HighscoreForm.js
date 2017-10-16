import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import HighscoreFormContainer from '../../containers/HighscoreFormContainer';

import Button from '../../components/Button';
import Input from '../../components/Input';

class HighscoreForm extends Component {
  onSubmit = values => {
    const { push, score, onGoHome, setName } = this.props;
    return push('highscores/', {
      name: values.name,
      score,
      createdAt: new Date().toString(),
    })
      .then(() => {
        setName(values.name);
        onGoHome();
      })
      .catch(e => {
        console.log('push product error', e);
      });
  };

  render() {
    const { handleSubmit, initialValues } = this.props;
    const submit = handleSubmit(this.onSubmit);

    return (
      <form style={styles.form} onSubmit={submit} className="animated fadeIn">
        <Field
          name="name"
          component={Input}
          placeholder="Donald Trump"
          autoFocus={!initialValues.name}
        />
        <Button
          style={styles.button}
          onClick={submit}
          autoFocus={!!initialValues.name}
        >
          Submit score
        </Button>
      </form>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
  },
};

HighscoreForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default HighscoreFormContainer(HighscoreForm);
