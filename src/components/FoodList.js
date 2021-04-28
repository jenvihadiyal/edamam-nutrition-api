import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFoodList,
} from "../actions/listApi";
const FoodList = () => {
  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoodList());
  }, []);

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Health Labels</h4>
        {console.log("jenvijenvijenvi", tutorials.healthLabels)}
        <ul className="list-group">
          {tutorials ?
            tutorials.healthLabels?.map((tutorial, index) => (
              <li
                className={
                  "list-group-item "
                }
                key={index}
              >
                {tutorial}
              </li>
            )) : "Loading Data....."}
        </ul>


      </div>
    </div>
  );
};

export default FoodList;
