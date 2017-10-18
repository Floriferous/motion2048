import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui-icons/Settings';
import SettingsContainer from '../../containers/SettingsContainer';
import SettingsModal from './SettingsModal';

const SettingsButton = ({ settings, toggleModal, onChangeSetting }) => (
  <div style={{ position: 'absolute', top: 8, right: 8 }}>
    <IconButton onClick={toggleModal}>
      <SettingsIcon style={{ color: 'white' }} />
    </IconButton>
    <SettingsModal
      open={settings.modalIsOpen}
      toggleModal={toggleModal}
      onChangeSetting={onChangeSetting}
      settings={settings}
    />
  </div>
);

SettingsButton.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleModal: PropTypes.func.isRequired,
  onChangeSetting: PropTypes.func.isRequired,
};

export default SettingsContainer(SettingsButton);
