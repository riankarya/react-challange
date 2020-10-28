import React from 'react'
import { Button, Card } from 'react-bootstrap';

const DotaCard = (props) => {
  const attribute = () => {
    switch (props.primary_attr) {
      case "str":
        return "Strength"
      case "agi":
        return "Agility"
      case "int":
        return "Intelligence"
      default:
        return ""
    }
  }
  return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${props.img_url}_vert.jpg
        `} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Primary Attribute: {attribute()}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
  )
}

export default DotaCard