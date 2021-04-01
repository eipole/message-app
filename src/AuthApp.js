import { Container, Grid } from "@material-ui/core"
import React from "react"
import Routes from "./Routes"

export default function AuthApp() {
  return (
    <Grid container spacing={3}>
      <Container maxWidth="md">
        <Routes />
      </Container>
    </Grid>
  )
}
