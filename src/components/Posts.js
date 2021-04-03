import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core"
import React from "react"
import { useMutation } from "react-query"
import { queryClient } from "../AppProviders"
import { deletePost } from "../utils/api"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

function Posts({ posts }) {
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("FetchPosts")
    }
  })
  const classes = useStyles()

  function handleClick(id) {
    try {
      mutation.mutate({ id })
    } catch (error) {
      console.log(error)
    }
  }

  const arr = posts.data.posts
  return (
    <Paper>
      {arr.map((elem) => {
        return (
          <Card key={elem.id} className={classes.container}>
            <CardContent>
              <Typography variant="h6" component="h5">
                Post from {elem.user.username}
              </Typography>
              <Typography component="p">{elem.caption}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                size="small"
                color="primary"
                onClick={() => handleClick(elem.id)}
              >
                Delete
              </IconButton>
            </CardActions>
          </Card>
        )
      })}
    </Paper>
  )
}
export default Posts
