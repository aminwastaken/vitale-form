import { Field } from 'react-final-form';
import { Select } from 'mui-rff';
import 'date-fns';
import CustomTextfield from '../../../components/CustomTextfield';
import normalizeSsn from '../../../utils/normalizeSsn';
import departments from '../../../data/dapartments';
import { MenuItem, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CustomRadioButtonGroup from '../../../components/CustomRadioButtonGroup';
import CustomDatePicker from '../../../components/CustomDatePicker';
import CustomSelect from '../../../components/CustomSelect';

const FirstFormPage = () => {
  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + -16);
  const departmentMenuItems = departments.map((department) => {
    return (
      <MenuItem key={department.num_dep} value={department.num_dep}>
        {department.dep_name}
      </MenuItem>
    );
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CustomRadioButtonGroup
          label="Civilité"
          name="gender"
          data={[
            { label: 'M', value: 'm' },
            { label: 'Mme', value: 'mme' },
            { label: 'Mlle', value: 'mlle' },
          ]}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          label="Prenom"
          name="firstName"
          component={CustomTextfield}
          required={true}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          label="Nom"
          name="lastName"
          component={CustomTextfield}
          required={true}
        />
      </Grid>

      <Grid item xs={6}>
        <Field
          name="DepartmentOfBirth"
          label="Département de naissance"
          component={CustomSelect}
          required={true}
          items={departments}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="dateOfBirth"
          label="Date de naissance"
          language="fr"
          dateFormat="yyy/MM/dd"
          component={CustomDatePicker}
          required={true}
          maxDate={maxDate}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Numéro de sécurité sociale"
          name="socialSecurityNumber"
          component={CustomTextfield}
          parse={normalizeSsn}
          required={true}
        />
      </Grid>
    </Grid>
  );
};

export default FirstFormPage;
