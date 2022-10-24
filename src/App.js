import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./index.css";
import DetailPage from "./notekeeper/DetailPage";
import CreateNote from "./notekeeper/component/CreateNote";
import Main from "./notekeeper/Main";
import NoMatch from "./notekeeper/NoMatch";
export default function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path="/create">
        <CreateNote />
      </Route>
      <Route path="/notes/:noteId">
        <DetailPage />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  )
}

