import { FETCH_HEROES, FETCH_DETAIL, ADD_TO_FAVORITE } from './actionTypes'

export const addToFavorite = (payload) => {
  return {
    type: ADD_TO_FAVORITE, payload
  }
}

export const fetchHeroes = () => {
  return dispatch => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroes')
    // fetch('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=8D92899D41E1E20729E91534E04CB0E2')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'ASUP TI ACTION');
        dispatch(
          {
            type: FETCH_HEROES,
            payload: data
          }
        ) 
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchDetails = (id) => {
  return dispatch => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroStats')
      // fetch('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=8D92899D41E1E20729E91534E04CB0E2')
      .then(response => response.json())
      .then(data => {
        console.log(data, id, 'ASUP TI THEN USEEFFECT');
        console.log(data.filter(elem => elem.id == id)[0], 'DATA.FILTER');
        dispatch(
          {
            type: FETCH_DETAIL,
            payload: data.filter(elem => elem.id == id)[0]
          }
        )
        // setHeroStat(data.filter(elem => elem.id == id)[0])
      })
      .catch(err => {
        console.log(err)
      })
  }
}