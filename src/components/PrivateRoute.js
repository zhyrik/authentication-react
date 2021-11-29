import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

// HOC private
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  if(!currentUser){
        return <Navigate to="/login"/>
  }

  return <Component {...rest}/>

}