import { Field } from 'react-final-form';
import { KeyboardDatePicker } from 'mui-rff';
import DateFnsUtils from '@date-io/date-fns';
import CustomDatePicker from '../../../components/CustomDatePicker';
import Grid from '@material-ui/core/Grid';

const SecondFormPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Field
          name="startDate"
          label="Date de début"
          language="fr"
          dateFormat="dd/MM/yyyy"
          component={CustomDatePicker}
        />
      </Grid>

      <Grid item xs={12}>
        <Field
          name="endDate"
          label="Date de fin"
          language="fr"
          dateFormat="dd/MM/yyyy"
          component={CustomDatePicker}
        />
      </Grid>
    </Grid>
  );
};

export default SecondFormPage;
