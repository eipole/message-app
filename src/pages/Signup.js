import {
  Button,
  Card,
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

function Signup() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()

  const classes = useStyles()
  async function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords dont match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/home")
    } catch (error) {
      setError("failed create user")
    }
    setLoading(false)
  }

  return (
    <Container className={classes.container} component="div" maxWidth="sm">
      {error && alert(error)}
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
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            inputRef={usernameRef}
            id="username"
            aria-describedby="helper-username"
          />
          <FormHelperText id="helper-username">Chose username</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor=" password">Password</InputLabel>
          <Input
            inputRef={passwordRef}
            type="password"
            id=" password"
            aria-describedby="helper-password"
          />
          <FormHelperText id="helper-password">Set password</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor=" password-confirmation">
            Confirm Password{" "}
          </InputLabel>
          <Input
            inputRef={passwordConfirmRef}
            type="password"
            id=" password-confirmation"
            aria-describedby="helper-password-conf"
          />
          <FormHelperText id="helper-password-conf">
            Confirm password
          </FormHelperText>
        </FormControl>
        <Button disabled={loading} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
      <Link className={classes.lenke} to="/login">
        If you have account - login
      </Link>
    </Container>
  )
}

export default Signup
