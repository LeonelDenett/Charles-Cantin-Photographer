import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& label.Mui': {
        color: 'red',
    },
    '& label.Mui-focused': {
        color: '#393737',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#393737',
    },
    '& .MuiOutlinedInput-root': {
        height: '100%',
        color: '#393737',
      '& fieldset': {
        borderColor: '#393737',
        borderRadius: '2px',
    },
      '&:hover fieldset': {
        borderColor: '#393737',
        border: '2px solid #393737'
    },
      '&.Mui-focused fieldset': {
        borderColor: '#393737',
    },
    },
});

function Input({styles, label, name, type, onChange}) {
    return (
        <CssTextField
        fullWidth
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            label={label}
            name={name}
            type={type}
            variant="outlined"
            className={styles.textField}
            sx={{ input: { color: '#393737' }, label: { color: '#393737' } }}
        />
    );
}

export default Input;