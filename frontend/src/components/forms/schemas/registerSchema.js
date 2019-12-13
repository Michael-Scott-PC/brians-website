import * as yup from 'yup';

export default yup.object({
  first_name: yup
    .string()
    .min(2, 'First name field is too short.')
    .max(30, 'First name field is too long.')
    .required('Required'),
  last_name: yup
    .string()
    .min(2, 'Last name field is too short.')
    .max(30, 'Last name field is too long.')
    .required('Required'),
  email: yup
    .string()
    .email('Invalid email')
    .min(7, 'Email field is too short.')
    .max(40, 'Email field is too long.')
    .required('Required'),
  password1: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  password2: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
});
