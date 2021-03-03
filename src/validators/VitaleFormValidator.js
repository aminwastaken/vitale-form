const VitaleFormValidator = (values) => {
  let gender = '0';
  let ssnValid = true;
  let formattedSsn = '';
  if (values.socialSecurityNumber)
    formattedSsn = values.socialSecurityNumber.replace(/\s+/g, '');
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

  if (formattedSsn) {
    if (formattedSsn.charAt(0) !== gender) {
      errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
    }
    if (formattedSsn.charAt(0) !== gender) {
      errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
    }
    if (values.dateOfBirth) {
      if (
        formattedSsn.substring(1, 3) !==
        values.dateOfBirth.getFullYear().toString().substring(2, 4)
      ) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }
      if (
        Number(formattedSsn.substring(3, 5)) !==
        Number(values.dateOfBirth.getMonth()) + 1
      ) {
        errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
      }
    }
    if (!/^\d+$/.test(formattedSsn) || formattedSsn.length !== 13) {
      errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
    }

    if (
      values.DepartmentOfBirth &&
      values.DepartmentOfBirth !== formattedSsn.substring(5, 7)
    ) {
      errors.socialSecurityNumber = 'Numéro de sécurité sociale invalide';
    }
  } else {
    errors.socialSecurityNumber = 'Ce champ est requis';
  }

  return errors;
};

export default VitaleFormValidator;
