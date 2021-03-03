import { max } from 'date-fns';
import createDecorator from 'final-form-calculate';

let date = new Date();

const calculator = createDecorator(
  {
    field: 'startDate',
    updates: {
      endDate: (startDateValue, allValues) => {
        if (!allValues.endDate) return startDateValue;
        if (startDateValue > allValues.endDate) return startDateValue;
        return allValues.endDate;
      },
    },
  },
  {
    field: 'endDate',
    updates: {
      startDate: (endDateValue, allValues) => {
        if (allValues.startDate && endDateValue < allValues.startDate)
          return endDateValue;
        return allValues.startDate;
      },
    },
  }
);
export default calculator;
