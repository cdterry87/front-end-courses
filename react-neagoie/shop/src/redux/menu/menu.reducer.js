import MENU_DATA from './menu.data'

const INITIAL_STATE = {
  sections: MENU_DATA
}

const menuReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default menuReducer