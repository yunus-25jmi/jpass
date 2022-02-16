const yup = require('yup')
require('yup-password')(yup)

export const userSchema = yup.object().shape({
  firstname: yup.string().required('please enter a first name'),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().password().required()
})
