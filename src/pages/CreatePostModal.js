import {
  Button,
  Card,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core"
import React, { useState } from "react"
import { useMutation } from "react-query"
import { queryClient } from "../AppProviders"
import { dummyUser } from "../components/user"
import { createPost } from "../utils/api"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    background: theme.palette.primary.light
  }
}))

function CreatePostModal() {
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("FetchPosts")
    }
  })
  const [text, setText] = useState("")
  const classes = useStyles()
  const userId = dummyUser.id

  if (mutation.isLoading) return "Loading....."

  async function handleSubmit() {
    const caption = text
    try {
      await mutation.mutate({ userId, caption })
      setText("")
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    event.preventDefault()
    const input = event.target.value
    setText(input)
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h4" component="h1">
        Write somthing.
      </Typography>
      <Card /* onSubmit={handleSubmit} */>
        <TextField
          multiline
          color="secondary"
          onChange={(event) => handleChange(event)}
          value={text}
          margin="dense"
          name="post"
          label="AddPost"
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Card>
    </Paper>
  )
}

export default CreatePostModal
