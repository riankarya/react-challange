import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const DotaCard = (props) => {
  const history = useHistory()
  const attribute = () => {
    switch (props.primary_attr) {
      case 'str':
        return 'Strength'
      case 'agi':
        return 'Agility'
      case 'int':
        return 'Intelligence'
      default:
        return ''
    }
  }
  const role = () => {
    return props.role.join(', ')
  }
  return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={`http://cdn.dota2.com/apps/dota2/images/heroes/${props.img_url}_vert.jpg
        `} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Primary Attribute: {attribute()}
            </Card.Text>
            <Card.Text>
            Role: {role()}
            </Card.Text>
            <Button onClick={() => history.push(`/detail/${props.id}`)} variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
  )
}

export default DotaCard