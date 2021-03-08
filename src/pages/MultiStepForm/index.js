import React from 'react';
import { Field } from 'react-final-form';
import './index.css';

import Wizard from './Wizard';
import VitaleFormValidator from '../../validators/VitaleFormValidator';
import FirstFormPage from './FormSteps/FirstFormPage';
import SecondFormPage from './FormSteps/SecondFormPage';
import calculator from '../../utils/calculator';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const WizardContainer = withStyles({
  root: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: '#FFF',
  },
})(Container);

const MultiStepForm = () => (
  <div class="main-container">
    <WizardContainer maxWidth="sm">
      <Wizard onSubmit={onSubmit} decorators={[calculator]}>
        <Wizard.Page validate={VitaleFormValidator}>
          <FirstFormPage />
        </Wizard.Page>
        <Wizard.Page>
          <SecondFormPage />
        </Wizard.Page>
      </Wizard>
    </WizardContainer>
  </div>
);

export default MultiStepForm;
