import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';

function FormTest() {
  return <MyForm initialValues={{}} />;
}

function MyForm(props) {
  const { initialValues } = props;

  // yes, this can even be async!
  async function onSubmit(values) {
    console.log(values);
  }

  // yes, this can even be async!
  async function validate(values) {
    if (!values.firstName) {
      return { firstName: 'Saying hello is nice.' };
    }
    return;
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-container">
            <TextField label="Hello world" name="firstName" required={true} />
          </div>

          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
}

export default FormTest;
