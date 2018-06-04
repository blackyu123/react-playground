import React from "react"
import "./styles.css"

export default class Page extends React.Component {

  //todo: loading indicator

  render() {
    return (
      <div className="page-wrap">
        {this.props.children}
      </div>
    )
  }
}