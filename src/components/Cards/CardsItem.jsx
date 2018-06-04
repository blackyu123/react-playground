import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

export default class CardsItem extends React.Component {
  render() {
    const { item } = this.props
    const { title, author, preview } = item

    let image
    if (preview.enabled === true) {
      const firstImageURL = preview.images[0].source.url
      image = (
        <div className="img-wrap">
          <CardImg top width="100%" src={firstImageURL} alt={title}/>
        </div>
      )
    }

    // rendering
    return (
      <Card>
        {image}
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
        </CardBody>
      </Card>
    )
  }
}