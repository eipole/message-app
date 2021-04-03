import AuthApp from "./AuthApp"
//import { useAuthUser } from "./context/auth-context"
import { useAuth } from "./utils/AuthContext"

import UnAuthApp from "./UnAuthApp"

export default function App() {
  /*  const authUser =   useAuthUser() */
  const { authUser } = useAuth()

  if (authUser) {
    return <AuthApp />
  } else {
    return <UnAuthApp />
  }
}
