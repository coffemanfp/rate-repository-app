import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup.string().min(5, 'Too short!').required('Password is required')
})
