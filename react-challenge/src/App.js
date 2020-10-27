// import logo from './logo.svg';
import './App.css';
import DotaCard from './components/DotaCard'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "rian",
      heroes: [],
      search: '',
      isSearch: false
    }
    
  }
  componentDidMount() {
    console.log('asup 1');
    fetch('https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroes')
    // fetch('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=8D92899D41E1E20729E91534E04CB0E2')
      .then(response => response.json())
      .then(data => {
        console.log('asup2');
        this.setState({heroes: data})
        console.log(this.state.heroes, 'ASUP TI DIDMOUNT');
      })
  }
  list() {
    if(this.state.isSearch && this.state.isSearch){
      return this.state.heroes.filter(elem => {
        return elem.localized_name.toLowerCase().includes(this.state.search.toLowerCase())
      })
      .map(elem => {
        return <DotaCard img_url={elem.name.slice(14)} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}></DotaCard>
      })
    }else{
      return this.state.heroes.map(elem => {
        return <DotaCard img_url={elem.name.slice(14)} name={elem.localized_name} key={elem.id} primary_attr={elem.primary_attr}></DotaCard>
      }) 
    }
  }

  searchOnSubmit(event){
    this.setState({isSearch: false})
    this.setState({search: event.target.value})
  }
  searchSubmit(){
    if(this.state.search) this.setState({isSearch: true})
    else this.setState({isSearch: false})
  }
  render() {
    return <div>
      <div className="p-4">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={this.searchOnSubmit.bind(this)}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.searchSubmit.bind(this)}>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

      {/* <Card name={this.state.name}></Card>
      <Card name={this.state.heroes.length}></Card> */}
      <div className="d-flex flex-wrap">
      { this.list() }
      </div>
      </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Card name="rian"></Card>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
