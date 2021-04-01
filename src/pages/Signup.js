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

function Signup() {
  const classes = useStyles()
  function handleSubmit() {
    return
  }

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
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" aria-describedby="helper-username" />
          <FormHelperText id="helper-username">Chose username</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor=" password">Password</InputLabel>
          <Input
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
            type="password"
            id=" password-confirmation"
            aria-describedby="helper-password-conf"
          />
          <FormHelperText id="helper-password-conf">
            Confirm password
          </FormHelperText>
        </FormControl>
        <Button onClick={handleSubmit}>Create user</Button>
      </form>
      <Link className={classes.lenke} to="/login">
        If you have account - login
      </Link>
    </Container>
  )
}

export default Signup
