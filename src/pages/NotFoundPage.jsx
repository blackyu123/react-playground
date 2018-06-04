import React from "react"

export default class HomePage extends React.Component {
  componentWillMount() {
    document.title = "404"
  }

  render() {
    return (
      <div className="container">
        <h1>404</h1>
      </div>
    )
  }
}

