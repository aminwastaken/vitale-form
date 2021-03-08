import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { setSeconds } from 'date-fns';

const CustomButton = ({ text, buttonType, ...rest }) => {
  // buttonType can be either 'primary' or 'secondary'
  const StyledButton = withStyles({
    root: {
      backgroundColor: buttonType === 'primary' && '#F84D4E',
      color: buttonType === 'primary' ? '#FFF' : '#000',
      border: buttonType == 'secondary' && '#F84D4E solid 2px',
      '&:hover': {
        background: buttonType === 'primary' && '#f96f70',
        border: '#F84D4E solid 2px',
      },
    },
    label: {
      color: buttonType === 'secondary' && '#F84D4E',
      '&:hover': {
        color: buttonType === 'secondary' && '#f96f70',
      },
    },
  })(Button);
  return (
    <StyledButton
      {...rest}
      variant={buttonType === 'primary' ? 'contained' : 'outlined'}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
