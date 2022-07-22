// Form and Validation
import { useFormik } from 'formik';
import * as yup from 'yup';
// Mui Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Mui Styles
import {styled} from '@mui/material/styles';

// TextField Styled
const CssTextField = styled(TextField)({
    '& label': {
        color: '#FEFBE7',
    },
    '& label.Mui-focused': {
        color: '#FEFBE7',
    },
    '& label::selection': {
        color: '#393737',
        backgroundColor: '#FEFBE7',
    },
    '& input': {
        color: '#FEFBE7',
    },
    '& input::selection': {
        color: '#393737',
        backgroundColor: '#FEFBE7',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FEFBE7',
        borderRadius: '2px',
    },
      '&:hover fieldset': {
        border: '2px solid #FEFBE7'
    },
      '&.Mui-focused fieldset': {
        borderColor: '#FEFBE7',
    },
    },
});

// Validations Yup
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your Name')
        .min(3, 'Name should be of minimum 3 characters length')
        .required('Name is required'),
    message: yup
        .string('Enter your Message')
        .min(10, 'Message should be of minimum 10 characters length')
        .required('Message is required'),
});

function FormContainer({styles}) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch('api/mail', {
                method: 'POST',
                body: JSON.stringify(values)
            });
            formik.resetForm();
        },
    });

    return (
        <Box className={styles.formContainer}>
            <form method='POST' onSubmit={formik.handleSubmit}>
                <CssTextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className={styles.textField}
                />
                <CssTextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className={styles.textField}
                />
                <CssTextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                className={styles.textField}
                />
                <Button variant="contained" color="whiteDark" type="submit">Sumbit</Button>
            </form>
        </Box>
    );
}

export default FormContainer;