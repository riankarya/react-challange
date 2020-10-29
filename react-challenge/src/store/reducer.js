import { FETCH_HEROES, FETCH_DETAIL, ADD_TO_FAVORITE } from './actionTypes'

const defaultValue = {
  name: 'ashuppppppppppp',
  favorites: [],
  heroes: [],
  heroStat: {}
}
const reducer = (state=defaultValue, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]}
    case FETCH_HEROES:
      return {...state, heroes: [...state.heroes, ...action.payload]}
    case FETCH_DETAIL:
      return {...state, heroStat: {...action.payload}}
    default:
      return state
  }
}

export default reducer