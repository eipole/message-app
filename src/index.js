import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AppProviders from "./AppProviders"
import { theme } from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProviders>
        <App />
      </AppProviders>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
