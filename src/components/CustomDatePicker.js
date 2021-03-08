import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'mui-rff';
import frLocale from 'date-fns/locale/fr';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const CustomDatePicker = ({
  input: { name },
  maxDate,
  label,
  dateFormat,
  ...rest
}) => {
  const theme = createMuiTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: { backgroundColor: '#F84D4E' },
      },
    },
  });
  return (
    // <ThemeProvider theme={theme}>
    <DatePicker
      label={label}
      format={dateFormat}
      label={label}
      name={name}
      required={true}
      dateFunsUtils={DateFnsUtils}
      maxDate={maxDate}
      color="secondary"
      locale={frLocale}
      theme={theme}
    />
    // </ThemeProvider>
  );
};

export default CustomDatePicker;
