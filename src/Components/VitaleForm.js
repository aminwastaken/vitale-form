import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-final-form';
import { TextField, KeyboardDatePicker, Radios, Select } from 'mui-rff';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MenuItem, Button } from '@material-ui/core';
import departments from '../data/dapartments';
import './VitaleForm.css';

const VitaleForm = () => {
  return <MyForm initialValues={{}} />;
};

const MyForm = (props) => {
  let date = new Date();
  const [message, setMessage] = useState('');
  date.setFullYear(date.getFullYear() + -16);
  const { initialValues } = props;
  const departmentMenuItems = departments.map((department) => {
    return (
      <MenuItem key={department.num_dep} value={department.num_dep}>
        {department.dep_name}
      </MenuItem>
    );
  });

  const onSubmit = (values) => {
    //make sure the first and last name are formated before submitting them
    setMessage(<p ClassName="form-valid">Le formulaire est valide</p>);
  };

  const validate = (values) => {
    let gender = '0';
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Ce champ est requis';
    } else if (
      !/^[a-zA-Z\u00C0-\u00FF]*$/.test(values.firstName) ||
      values.firstName.length > 26 ||
      values.firstName.length < 3
    ) {
      // checking if the name contains only letters
      errors.firstName = 'Prénom invalide';
    }
    if (!values.lastName) {
      errors.lastName = 'Ce champ est requis';
    } else if (
      !/^[a-zA-Z\u00C0-\u00FF]*$/.test(values.lastName) ||
      values.lastName.length > 26 ||
      values.lastName.length < 3
    ) {
      errors.lastName = 'Nom de famille invalide';
    }

    if (!values.gender) errors.gender = 'Ce champ est requis';
    else if (values.gender === 'm') {
      gender = '1';
    } else if (values.gender === 'mme' || values.gender === 'mlle') {
      gender = '2';
    }

    if (values.socialSecurityNumber) {
      if (values.socialSecurityNumber.charAt(0) !== gender) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }
      if (values.socialSecurityNumber.charAt(0) !== gender) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }
      if (values.dateOfBirth) {
        if (
          values.socialSecurityNumber.substring(1, 3) !==
          values.dateOfBirth.getFullYear().toString().substring(2, 4)
        ) {
          errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
        }
        if (
          Number(values.socialSecurityNumber.substring(3, 5)) !==
          Number(values.dateOfBirth.getMonth()) + 1
        ) {
          errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
        }
      }
      if (
        !/^\d+$/.test(values.socialSecurityNumber) ||
        values.socialSecurityNumber.length !== 13
      ) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }

      if (
        values.DepartmentOfBirth &&
        values.DepartmentOfBirth !== values.socialSecurityNumber.substring(5, 7)
      ) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }
    } else {
      errors.socialSecurityNumber = 'Ce champ est requis';
    }

    return errors;
  };

  return (
    <div className="form-container">
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-container"></div>
            <div className="input-container">
              <TextField label="Prenom" name="firstName" required={true} />
            </div>
            <div className="input-container">
              <TextField label="Nom" name="lastName" required={true} />
            </div>
            <div className="input-container">
              <KeyboardDatePicker
                name="dateOfBirth"
                label="Date de naissance"
                maxDate={date}
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
              <TextField
                label="Numéro de sécurité sociale"
                name="socialSecurityNumber"
                required={true}
              />
            </div>

            {/* <pre>{JSON.stringify(values)}</pre> */}
            <Button variant="contained" type="submit">
              Submit
            </Button>
            {message}
          </form>
        )}
      />
    </div>
  );
};

export default VitaleForm;
