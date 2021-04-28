import {
  RETRIEVE_TUTORIALS,
  FIND_FOOD_DATABASE,
} from "./types";

import TutorialDataService from "../services/ListService";


export const getAllNutritonList = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();
    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const getAllFoodList = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.get();
    console.log("my tutorial", res.data)
    dispatch({
      type: FIND_FOOD_DATABASE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
