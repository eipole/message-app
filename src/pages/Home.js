import { Card, Paper } from "@material-ui/core"
import React from "react"
import CreatePostModal from "./CreatePostModal"
import DisplayPosts from "./DisplayPosts"

function Home() {
  return (
    <Paper>
      <CreatePostModal />
      <Card>
        <DisplayPosts />
      </Card>
    </Paper>
  )
}

export default Home
