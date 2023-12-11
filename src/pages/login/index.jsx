import React from 'react'
import './login.css'
import { useFormik } from 'formik'
import Layout from '../../layout'
import LoginSchema from '../../schemas'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../actions/LoginActions'
const Login = () => {
  const initialValues = {
    email: '',
    first_name:'',
    last_name:''
  }
  const dispatch = useDispatch()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values,action) =>{
      axios.get('https://reqres.in/api/users')
      .then(data=>{
        const user = () => data.data.data.find(
          user => user.email == values.email && user.first_name == values.first_name && user.last_name == values.last_name
        )
        dispatch(loginUser(user()))
      })
      .catch(error => console.error(error))
      action.resetForm()
    }
  })
  return (
    <Layout>
      <div className='loginWrapper'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              autoComplete='off' 
              name='email' 
              placeholder='example@gmail.com' 
              value={values.email} 
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className='form-error'>{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor='first_name'>First Name</label>
            <input 
              type='name'
              autoComplete='off'
              name='first_name'
              placeholder='First Name'
              value={values.first_name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.first_name && touched.first_name ? (
              <p className='form-error'>{errors.first_name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor='last_name'>Last Name</label>
            <input 
              type='name' 
              autoComplete='off' 
              name='last_name' 
              placeholder='Last Name' 
              value={values.last_name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.last_name && touched.last_name ? (
              <p className='form-error'>{errors.last_name}</p>
            ) : null}
          </div>

          <div>
            <button type='submit'>Registration</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login