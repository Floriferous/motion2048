import React from 'react';
import PropTypes from 'prop-types';

import { FormControl } from 'material-ui/Form';
import MuiSelect from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';

const Select = ({
  label, value, onChange, id, options, style,
}) => (
  <FormControl style={style}>
    <InputLabel htmlFor="age-simple">{label}</InputLabel>
    <MuiSelect
      value={value}
      onChange={event => onChange(id, event.target.value)}
      input={<Input id="age-simple" />}
    >
      {options.map(option => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Select.defaultProps = {
  style: {},
};

export default Select;
