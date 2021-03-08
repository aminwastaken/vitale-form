import { Field } from 'react-final-form';
import CustomRadioButton from './CustomRadioButton';
import FormLabel from '@material-ui/core/FormLabel';

const CustomRadioButtonGroup = ({ name, label, data, ...rest }) => {
  if (!data) return '';
  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      {data.map((item) => {
        return (
          <Field
            name={name}
            type="radio"
            value={item.value}
            label={item.label}
            component={CustomRadioButton}
            color="secondary"
            {...rest}
          />
        );
      })}
    </>
  );
};

export default CustomRadioButtonGroup;
