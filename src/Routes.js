import React from "react"
import { Switch, Route } from "react-router-dom"
// import CreatePostModal from "./pages/CreatePostModal"
// import DisplayPosts from "./pages/DisplayPosts"
import Home from "./pages/Home"

export default function Routes() {
  return (
    <div className="border">
      <Switch>
        <Route path="/home" component={Home} />
        {/* <Route path="/createpost" component={CreatePostModal} /> */}
        {/* <Route path="/displayposts" component={DisplayPosts} /> */}
      </Switch>
    </div>
  )
}
