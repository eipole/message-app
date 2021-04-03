import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles
} from "@material-ui/core"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4)
  },
  formdiv: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: theme.spacing(4)
  },
  lenke: {
    textAlign: "center"
    // paddingTop: theme.spacing(4)
  }
}))

function Login() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const history = useHistory()

  const classes = useStyles()
  console.log(error)
  async function handleLogin(event) {
    event.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setTimeout(() => history.push("/"), 0)
    } catch (error) {
      setError("failed to login")
    }
    setLoading(false)
  }

  return (
    <Container className={classes.container} component="div" maxWidth="sm">
      <form className={classes.formdiv}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            inputRef={emailRef}
            id="email"
            aria-describedby="helper-email"
          />
          <FormHelperText id="helper-email">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor=" password">Password</InputLabel>
          <Input
            type="password"
            inputRef={passwordRef}
            id=" password"
            aria-describedby="helper-password"
          />
          <FormHelperText id="helper-password">Set password</FormHelperText>
        </FormControl>
        <Button disabled={loading} type="submit" onClick={handleLogin}>
          Login
        </Button>
        {/* <Button onClick={signOut}>Log out</Button> */}
      </form>
      <Link className={classes.lenke} to="/signup">
        If you don`t have account - sign up
      </Link>
    </Container>
  )
}

export default Login
