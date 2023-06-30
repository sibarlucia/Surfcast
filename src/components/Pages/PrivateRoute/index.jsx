import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ isLogged, children, redirectRoute = '/login' }) => {
  if (!isLogged) {
    return <Navigate to={redirectRoute} replace />
  }

  return children
}