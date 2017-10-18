import React from 'react';
import PropTypes from 'prop-types';

import Dialog, { DialogTitle } from 'material-ui/Dialog';

const SettingsModal = ({ onRequestClose, open, changeSetting }) => (
  <Dialog open={open} onRequestClose={onRequestClose}>
    <DialogTitle>Set backup account</DialogTitle>
    <div />
  </Dialog>
);

SettingsModal.propTypes = {};

export default SettingsModal;
