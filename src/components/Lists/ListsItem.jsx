import React from "react"

export default class ListsItem extends React.Component {
  render() {
    const { item } = this.props
    const { title, author } = item

    // rendering
    return (
      <li>
        {title}
        {author}
      </li>
    )
  }
}