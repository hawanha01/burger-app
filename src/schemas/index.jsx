import * as Yup from 'yup'

const LoginSchema = Yup.object({
    first_name: Yup.string().min(2).max(25).required("Please enter your first name"),
    last_name: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email")
})

export default LoginSchema