import clsx from 'clsx';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';



export const SimpleInput = (props) => {
  const { value, name, type, handleChange, fullWidth, placeholder, startIcon, label, rows, readOnly = true } = props;
  return (
    <FormControl  variant="outlined" fullWidth={fullWidth || true}>
      <TextField
        variant="outlined"
        id={`outlined-adornment-${name}`}
        type={type}
        value={value}
        readOnly={readOnly}
        startAdornment={startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>}
        onChange={handleChange}
        name={name}
        fullWidth={true}
        multiline={true}
        label={label}
        placeholder={placeholder}
        rows={rows}
      />
    </FormControl>
  );
};
