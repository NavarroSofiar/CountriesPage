 import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  "./AllActivities.modules.css";
import {
  filterByActivity,
  getAllActivities,
  getAllCountries,
} from "../../redux/actions";

const AllActivities = () => {
  const totalActivities = useSelector((state) => state.activities);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch])

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.value === "All") {
      return dispatch(getAllCountries());
    }
    dispatch(filterByActivity(e.target.value));
  };

  return (
    
      <select  onChange={(e) => handleOnChange(e)}>
        <option value="All">All activities</option>
        {totalActivities.map((act, i) => {
          return (
            <option value={act.name} key={i}>
              {act.name}
            </option>
          );
        })}
      </select>
   
  );
};

export default AllActivities; 