import { Card, Typography } from "@material-ui/core"
import React from "react"
import Posts from "../components/Posts"
import { useQuery } from "react-query"
import { getPosts } from "../utils/api"

function DisplayPosts() {
  const { data, isLoading, error } = useQuery("FetchPosts", getPosts)
  if (isLoading) return "Loading...."
  if (error) return console.log(error)
  return (
    <Card>
      <Typography color="primary" variant="h4" component="h3">
        Title for posts
      </Typography>
      <Posts posts={data} />
    </Card>
  )
}

export default DisplayPosts
