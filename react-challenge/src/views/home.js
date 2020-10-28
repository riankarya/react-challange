// import logo from './logo.svg';
import '../App.css';
import DotaCard from '../components/DotaCard'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

const Home = (props) => {
  const [heroes, setHeroes] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroes')
    // fetch('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=8D92899D41E1E20729E91534E04CB0E2')
      .then(response => response.json())
      .then(data => {
        setHeroes(data)
      })
  }, [])
  const list = () => {
    if(search){
      return heroes.filter(elem => {
        return elem.localized_name.toLowerCase().includes(search.toLowerCase())
      })
      .map(elem => {
        return <DotaCard img_url={elem.name.slice(14)} id={elem.id} role={elem.roles} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}/>
      })
    }else{
      console.log(heroes[0]);
      return heroes.map(elem => {
        return <DotaCard img_url={elem.name.slice(14)} id={elem.id} role={elem.roles} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}/>
      }) 
    }
  }
  const searchOnSubmit = (event) => {
    setSearch(event.target.value)
  }
  return (<div>
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
