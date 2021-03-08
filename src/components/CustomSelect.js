import { Select } from 'mui-rff';
import { MenuItem } from '@material-ui/core';

const CustomSelect = ({ input, meta, items, label }) => {
  const selectMenuItems = items.map((item) => {
    return (
      <MenuItem key={item.value} value={item.value}>
        {item.name}
      </MenuItem>
    );
  });
  return (
    <Select {...input} label={label} color="secondary">
      {selectMenuItems}
    </Select>
  );
};

export default CustomSelect;
