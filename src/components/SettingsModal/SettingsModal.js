import React from 'react';
import PropTypes from 'prop-types';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Select from '../../components/Select';

const stiffnessOptions = [
  { label: "I don't need a spring", value: 1 },
  { label: 'Like your mom', value: 50 },
  { label: 'Average Joe', value: 120 },
  { label: 'Like your neck', value: 300 },
  { label: 'Like my ...', value: 400 },
  { label: 'Carbyne', value: 1000 },
  { label: 'Stiff as fuck', value: 2000 },
];
const dampingOptions = [
  { label: "What's damping?", value: 0 },
  { label: 'Average Joe', value: 15 },
  { label: 'Heavy duty oil', value: 35 },
  { label: 'Sticky situation', value: 50 },
  { label: 'T H I C C', value: 80 },
];

const SettingsModal = ({
  toggleModal,
  open,
  onChangeSetting,
  settings: { stiffness, damping },
}) => (
  <Dialog open={open} onRequestClose={toggleModal}>
    <DialogTitle>Choose your game physics</DialogTitle>
    <DialogContent
      style={{ display: 'flex', flexDirection: 'column', padding: 32 }}
    >
      <Select
        value={stiffness}
        label="Spring stiffness"
        id="stiffness"
        options={stiffnessOptions}
        onChange={onChangeSetting}
        style={{ marginBottom: 32, width: 150 }}
      />
      <Select
        value={damping}
        label="Spring damping"
        id="damping"
        options={dampingOptions}
        onChange={onChangeSetting}
        style={{ width: 150 }}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={toggleModal} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

SettingsModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onChangeSetting: PropTypes.func.isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingsModal;
