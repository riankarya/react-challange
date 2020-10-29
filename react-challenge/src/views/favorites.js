// import logo from './logo.svg';
import '../App.css';
import DotaCard from '../components/DotaCard'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../store/action'

const Home = (props) => {
  const history = useHistory()
  const [heroes, setHeroes] = useState([])
  const [search, setSearch] = useState("")
  const { favorites } = useSelector(state => state)

  const list = () => {
    if(search){
      return favorites.filter(elem => {
        return elem.localized_name.toLowerCase().includes(search.toLowerCase())
      })
      .map(elem => {
        return <DotaCard img_url={elem.img_url} favorite={true} id={elem.id} role={elem.role} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}/>
      })
    }else{
      return favorites.map(elem => {
        return <DotaCard img_url={elem.img_url} favorite={true} id={elem.id} role={elem.role} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}/>
      }) 
    }
  }
  const searchOnSubmit = (event) => {
    setSearch(event.target.value)
  }
  return (<div>
      <Button onClick={() => history.push("/")} variant="primary">Home</Button>
      <div className="p-4">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Heroes"
            aria-label="Search Heroes"
            aria-describedby="basic-addon2"
            onChange={searchOnSubmit.bind(this)}
          />
        </InputGroup>
      </div>
      <div className="d-flex flex-wrap">
      { list() }
      </div>
    </div>)
}

export default Home;
