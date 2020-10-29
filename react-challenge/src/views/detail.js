import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../store/action'

const Detail = () => {
  const history = useHistory()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const { heroStat } = useSelector(state => state)
  const dispatch = useDispatch()
  
  useEffect( async () => {
    setIsLoading(true)
    await dispatch(fetchDetails(id))
    setIsLoading(false)
  }, [])

  const attribute = () => {
    switch (heroStat.primary_attr) {
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
    return heroStat.roles.join(', ')
  }
  if (!heroStat.name) {
    return <img src="https://i.imgur.com/afIEU9W.gif?noredirect"></img>
  } else {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={`http://cdn.dota2.com/apps/dota2/images/heroes/${heroStat.name.slice(14)}_vert.jpg
        `} />
          <Card.Body>
            <Card.Title>{heroStat.localized_name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Primary Attribute: {attribute()}</ListGroupItem>
              <ListGroupItem>Role: {role()}</ListGroupItem>
              <ListGroupItem>Attack Type: {heroStat.attack_type}</ListGroupItem>
              <ListGroupItem>Base Health: {heroStat.base_health}</ListGroupItem>
              <ListGroupItem>Base Mana: {heroStat.base_mana}</ListGroupItem>
              <ListGroupItem>Base Armor: {heroStat.base_armor}</ListGroupItem>
              <ListGroupItem>Base Attack: {heroStat.base_attack_min} - {heroStat.base_attack_max}</ListGroupItem>
              <ListGroupItem>Base Strength: {heroStat.base_str}</ListGroupItem>
              <ListGroupItem>Base Agility: {heroStat.base_agi}</ListGroupItem>
              <ListGroupItem>Base Intelligence: {heroStat.base_int}</ListGroupItem>
              <ListGroupItem>Base Move Speed: {heroStat.  move_speed}</ListGroupItem>
            </ListGroup>
            <Button onClick={() => history.push('/')} variant="primary">Home</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Detail