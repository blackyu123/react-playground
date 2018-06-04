import React from "react"
import DataSource from "../data/datasource"
import Lists from "./Lists/index"

export default class RedditThreads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      kind: null,
    }
  }

  async getLists() {
    const { channelName } = this.props
    const { kind, data } = await DataSource.shared.getRedditThreads(channelName)

    this.setState({
      data,
      kind,
    })
  }

  async componentDidMount() {
    await this.getLists()
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <Lists lists={data}/>
      </div>
    )
  }
}