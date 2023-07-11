import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import DefaultLayout from 'src/layout/DefaultLayout'
/* import Api from '../../Api/Api' */

const ProtectedRoutes = () => {
  const navigate = useNavigate()
  const [userCheck, setUserCheck] = useState(true)

  /*   useEffect(() => {
    Api.getStartdata()
      .then((response) => {
        setUserCheck(true)
      })
      .catch((error) => {
        setUserCheck(false)
        if (
          (error && error.response && error.response.status === 419) ||
          error.response.status === 401
        ) {
          navigate('/login')
        }
      })
  }, []) */

  return userCheck ? <DefaultLayout /> : <Navigate to="/login" />
}

export default ProtectedRoutes
