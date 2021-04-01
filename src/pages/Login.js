import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles
} from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

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
  function handleLogin() {
    return
  }

  const classes = useStyles()
  return (
    <Container className={classes.container} component="div" maxWidth="sm">
      <form className={classes.formdiv}>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="helper-email" />
          <FormHelperText id="helper-email">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor=" password">Password</InputLabel>
          <Input id=" password" aria-describedby="helper-password" />
          <FormHelperText id="helper-password">Set password</FormHelperText>
        </FormControl>
        <Button onClick={handleLogin}>Create user</Button>
      </form>
      <Link className={classes.lenke} to="/signup">
        If you don`t have account - sign up
      </Link>
    </Container>
  )
}

export default Login
