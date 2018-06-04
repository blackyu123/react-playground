import React from "react"
import { Row, Col } from "reactstrap"
import CardsItem from "./CardsItem"
import "./styles.css"

export default class Cards extends React.Component {
  render() {
    const { Cards } = this.props

    // guard
    if (!Cards) {
      return null
    }

    const { children } = Cards

    // map
    const cardsNode = children.map(result => {

      const { data } = result

      return (
        <Col xs={4}>
          <CardsItem item={data} key={data.id}/>
        </Col>
      )
    })

    // rendering
    return (
      <Row className="reddit-cards">
        {cardsNode}
      </Row>
    )
  }
}