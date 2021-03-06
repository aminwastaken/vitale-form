import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import formatDate from '../../utils/formatDate';
import CustomButton from '../../components/CustomButton';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }
  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      const requestBody = JSON.stringify({
        first_name: values.firstName,
        last_name: values.lastName,
        date_of_birth: formatDate(values.dateOfBirth, '-'),
        gender: values.gender,
        department_of_birth: values.DepartmentOfBirth,
        start_date: formatDate(values.startDate, '-'),
        end_date: formatDate(values.endDate, '-'),
        social_security_number: values.socialSecurityNumber.replace(/\s+/g, ''),
      });
      console.log(requestBody);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody,
      };
      fetch('http://localhost:8000/users/', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        decorators={this.props.decorators}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {activePage}
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="space-between">
                  <Grid item>
                    {page > 0 && (
                      <CustomButton
                        type="button"
                        onClick={this.previous}
                        text="Precedent"
                        buttonType="secondary"
                      />
                    )}
                  </Grid>
                  <Grid item>
                    {!isLastPage && (
                      <CustomButton
                        type="submit"
                        text="Suivant"
                        buttonType="primary"
                      />
                    )}
                  </Grid>

                  {isLastPage && (
                    <Grid item>
                      <CustomButton
                        type="submit"
                        disabled={submitting}
                        text="Terminer"
                        buttonType="primary"
                      />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>

            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    );
  }
}
