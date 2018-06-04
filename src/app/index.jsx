import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import TopNavigation from "../components/TopNavigation/index"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
import "./styles.css"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopNavigation/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}