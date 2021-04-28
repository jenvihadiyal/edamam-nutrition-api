import {
  RETRIEVE_TUTORIALS,
  FIND_FOOD_DATABASE,
} from "../actions/types";

const initialState = [];

const listReducer = (tutorials = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case RETRIEVE_TUTORIALS:
      return payload;


    case FIND_FOOD_DATABASE:
      return payload;

    default:
      return tutorials;
  }
};

export default listReducer;