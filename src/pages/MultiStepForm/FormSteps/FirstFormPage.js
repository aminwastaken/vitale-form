import { Field } from 'react-final-form';
import { KeyboardDatePicker, Radios, Select } from 'mui-rff';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import CustomTextfield from '../../../components/CustomTextfield';
import normalizeSsn from '../../../utils/normalizeSsn';
import departments from '../../../data/dapartments';
import { MenuItem, Button } from '@material-ui/core';

const FirstFormPage = () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() + -16);
  const departmentMenuItems = departments.map((department) => {
    return (
      <MenuItem key={department.num_dep} value={department.num_dep}>
        {department.dep_name}
      </MenuItem>
    );
  });
  return (
    <>
      <div className="input-container">
        <Field
          label="Prenom"
          name="firstName"
          component={CustomTextfield}
          required={true}
        />
      </div>
      <div className="input-container">
        <Field
          label="Nom"
          name="lastName"
          component={CustomTextfield}
          required={true}
        />
      </div>
      <div className="input-container">
        <KeyboardDatePicker
          name="dateOfBirth"
          label="Date de naissance"
          maxDate={date}
          format="dd/MM/yyyy"
          dateFunsUtils={DateFnsUtils}
          required={true}
        />
      </div>
      <div className="input-container">
        <Radios
          label="Civilité"
          name="gender"
          required={true}
          data={[
            { label: 'M', value: 'm' },
            { label: 'Mme', value: 'mme' },
            { label: 'Mlle', value: 'mlle' },
          ]}
        />
      </div>
      <div className="input-container">
        <Select
          name="DepartmentOfBirth"
          label="Départements de naissance"
          formControlProps={{ margin: 'normal' }}
          required={true}
        >
          {departmentMenuItems}
        </Select>
      </div>
      <div className="input-container">
        <Field
          label="Numéro de sécurité sociale"
          name="socialSecurityNumber"
          component={CustomTextfield}
          parse={normalizeSsn}
          required={true}
        />
      </div>
    </>
  );
};

export default FirstFormPage;
