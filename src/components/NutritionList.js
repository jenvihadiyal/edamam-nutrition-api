import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNutritonList,
} from "../actions/listApi";

const NutritonList = () => {

  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNutritonList());
  }, []);

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Health Labels</h4>
        {console.log("tutorialstutorialstutorials", tutorials)}
        <ul className="list-group">
          {tutorials === undefined ?
            "Loading Data...." :
            tutorials.healthLabels?.map((tutorial, index) => (
              <li
                className={
                  "list-group-item "}
                key={index}
              >
                {tutorial}
              </li>
            ))}
        </ul>


      </div>
    </div>
  );
};

export default NutritonList;
