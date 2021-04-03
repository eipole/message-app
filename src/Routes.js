import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import CreatePostModal from "./pages/CreatePostModal"
import DisplayPosts from "./pages/DisplayPosts"
import Home from "./pages/Home"
// import { useAuth } from "./utils/AuthContext"

export default function Routes() {
  // const { authUser } = useAuth()

  return (
    <div className="border">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* {authUser && <Redirect to="/" />} */}
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/createpost" component={CreatePostModal} />
        <Route path="/displayposts" component={DisplayPosts} />
      </Switch>
    </div>
  )
}
