import React from 'react'
import { Button, Card } from 'react-bootstrap';

class DotaCard extends React.Component {
    attribute() {
      switch (this.props.primary_attr) {
        case "str":
          return "Strength"
        case "agi":
          return "Agility"
        case "int":
          return "Intelligence"
        default:
          console.log(this.props, 'ASUPPPPPPP');
          return "asup"
      }
    }
    render() {
      return <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${this.props.img_url}_vert.jpg
`} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    Primary Attribute: {this.attribute()}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
//       return <Card>
//         <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${this.props.img_url}_vert.jpg
// `} alt="" srcset=""/>
// <h1>Hello, {this.props.name}</h1>;
//         </Card>
    }
  }

export default DotaCard