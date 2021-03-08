import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CustomRadioButton = ({ input, label, children, ...rest }) => {
  return (
    <FormControlLabel
      {...input}
      control={<Radio color="secondary" />}
      label={label}
    />
  );
};

export default CustomRadioButton;
