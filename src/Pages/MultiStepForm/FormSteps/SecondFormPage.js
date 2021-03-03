import { Field } from 'react-final-form';
import { KeyboardDatePicker } from 'mui-rff';
import DateFnsUtils from '@date-io/date-fns';

const SecondFormPage = () => {
  return (
    <>
      <div className="input-container">
        <KeyboardDatePicker
          name="startDate"
          label="Date de début"
          format="dd/MM/yyyy"
          dateFunsUtils={DateFnsUtils}
          required={true}
        />
      </div>
      <div className="input-container">
        <KeyboardDatePicker
          name="endDate"
          label="Date de fin"
          format="dd/MM/yyyy"
          dateFunsUtils={DateFnsUtils}
          required={true}
        />
      </div>
    </>
  );
};

export default SecondFormPage;
