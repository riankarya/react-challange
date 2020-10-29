// import logo from './logo.svg';
import '../App.css';
import DotaCard from '../components/DotaCard'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../store/action'

const Home = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState("")
  const { heroes } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeroes())
  }, [])
  const list = () => {
    if(search){
      return heroes.filter(elem => {
        return elem.localized_name.toLowerCase().includes(search.toLowerCase())
      })
      .map(elem => {
        return <DotaCard favorite={false} img_url={elem.name.slice(14)} id={elem.id} role={elem.roles} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}/>
      })
    }else{
      return heroes.map((elem, i) => {
        return <DotaCard favorite={false} img_url={elem.name.slice(14)} id={elem.id} role={elem.roles} name={elem.localized_name} key={i} primary_attr={elem.primary_attr}/>
      }) 
    }
  }
  const searchOnSubmit = (event) => {
    setSearch(event.target.value)
  }
  return (<div>
      <Button onClick={() => history.push("/favorites")} variant="primary">Favorites</Button>
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
