import React from 'react';
import { Field } from 'react-final-form';

import Wizard from './Wizard';
import VitaleFormValidator from '../../validators/VitaleFormValidator';
import FirstFormPage from './FormSteps/FirstFormPage';
import SecondFormPage from './FormSteps/SecondFormPage';
import calculator from '../../utils/calculator';

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const MultiStepForm = () => (
  <div>
    <Wizard onSubmit={onSubmit} decorators={[calculator]}>
      <Wizard.Page validate={VitaleFormValidator}>
        <FirstFormPage />
      </Wizard.Page>
      <Wizard.Page>
        <SecondFormPage />
      </Wizard.Page>
    </Wizard>
  </div>
);

export default MultiStepForm;
