import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/LoginActions'

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <div style={{color: 'white'}} onClick={() => dispatch(logoutUser())}>logout</div>
  )
}

export default Logout
