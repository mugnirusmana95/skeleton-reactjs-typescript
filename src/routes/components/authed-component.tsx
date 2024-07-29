import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router"

import AuthedTemplate from "routes/templates/authed-template"
import { useDispatch, useSelector } from "react-redux"
import { RootDispatch, RootState } from "redux/store"

interface Props {
  component: any
  token?: string | null
}

const AuthedComponent = ({
  component: Component,
  token
}: Props) => {
  const router = useNavigate()
  const state = useSelector((state: RootState) => state)
  const dispatch = useDispatch<RootDispatch>()

  if (token) {
    return (
      <AuthedTemplate>
        <Component router={router} state={state} dispatch={dispatch} />
      </AuthedTemplate>
    )
  }

  return <Navigate to={"/login"} />
}

export default AuthedComponent