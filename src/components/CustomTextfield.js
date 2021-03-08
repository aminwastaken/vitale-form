import { TextField } from 'mui-rff';

function CustomTextfield({
  input,
  InputProps,
  meta,
  value,
  inputOnChange,
  ...rest
}) {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };
  return <TextField {...input} {...inputProps} {...rest} color="secondary" />;
}

export default CustomTextfield;
