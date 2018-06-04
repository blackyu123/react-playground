import React from "react"
import ListsItem from "./ListsItem"

export default class Lists extends React.Component {
  render() {
    const { lists } = this.props

    // guard
    if (!lists) {
      return null
    }

    const { children } = lists

    // map
    const listsNode = children.map(result => {

      const { data } = result

      return (
        <ListsItem item={data} key={data.id}/>
      )
    })

    // rendering
    return (
      <div>
        {listsNode}
      </div>
    )
  }
}