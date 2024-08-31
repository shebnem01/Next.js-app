// validationSchema.ts
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    // .min(5, 'Password must be at least 5 characters long')
    // .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    // .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
    // .matches(/(?=.*\d)/, 'Password must contain at least one number')
    .required('Password is required'),
});
