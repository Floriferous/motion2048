import { connect } from 'react-redux';
import changeSetting from '../actions/changeSetting';

const mapStateToProps = ({ gameSettings }) => ({ settings: gameSettings });

const mapDispatchToProps = dispatch => ({
  onChangeSetting: (name, value) => dispatch(changeSetting(name, value)),
});

const SettingsContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default SettingsContainer;
