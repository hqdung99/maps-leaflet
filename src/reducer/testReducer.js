import { SET_NAVIGATION, HOME_PAGE, MENU_PAGE } from "../constants";

const initialState = {
  navigationState: HOME_PAGE,
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATION: {
      console.log("before: ", state);
      state.navigationState = action.payload;
      console.log("after: ", state);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default navigation;
