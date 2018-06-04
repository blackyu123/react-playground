import React from "react"
import { Container, Row, Col } from "reactstrap"
import RedditThreads from "../components/RedditThreads"
import Page from "./Page"

export default class HomePage extends React.Component {
  componentWillMount() {
    document.title = "Home page"
  }

  render() {
    return (
      <Page>
        <Container>
          <h1>Reddit Lists</h1>
          <RedditThreads channelName={"gaming"}/>
        </Container>
      </Page>
    )
  }
}

