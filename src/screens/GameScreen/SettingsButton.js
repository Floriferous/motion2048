import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui-icons/Settings';
import SettingsContainer from '../../containers/SettingsContainer';
import SettingsModal from './SettingsModal';

const SettingsButton = ({
  settings: { modalIsOpen },
  toggleModal,
  changeSetting,
}) => (
  <div style={{ position: 'absolute', top: 8, right: 8 }}>
    <IconButton onClick={toggleModal}>
      <SettingsIcon style={{ color: 'white' }} />
    </IconButton>
    <SettingsModal
      open={modalIsOpen}
      onRequestClose={toggleModal}
      changeSetting={changeSetting}
    />
  </div>
);

SettingsButton.propTypes = {};

export default SettingsContainer(SettingsButton);
