import { connect } from 'react-redux';
import changeSetting from '../actions/changeSetting';
import toggleModal from '../actions/toggleModal';

const mapStateToProps = ({ gameSettings }) => ({ settings: gameSettings });

const mapDispatchToProps = dispatch => ({
  onChangeSetting: (name, value) => dispatch(changeSetting(name, value)),
  toggleModal: () => dispatch(toggleModal()),
});

const SettingsContainer = component =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default SettingsContainer;
