import { Button, Card, Paper } from "@material-ui/core"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import CreatePostModal from "./CreatePostModal"
import DisplayPosts from "./DisplayPosts"

function Home() {
  const [error, setError] = useState("")
  const history = useHistory()
  const { signOut, authUser } = useAuth()

  // if(error !== ""){alert(error)}

  async function handleLogout() {
    setError("")
    try {
      await signOut()
      setTimeout(() => history.push("/login"), 0)
    } catch (error) {
      setError("failed to log out")
    }
  }
  return (
    <Paper>
      <Button
        style={{ paddingTop: "3rem" }}
        color="secondary"
        onClick={handleLogout}
      >
        Log out
      </Button>
      <CreatePostModal />
      <Card>
        <DisplayPosts authUser={authUser.id} />
      </Card>
    </Paper>
  )
}

export default Home
