import React from "react";
import "./Countries.css";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function Countries() {
  const [recipe, setRecipe] = useState('')
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div class="row1">
      <div class="column2">
        <h1>Countries</h1>
        <form className="d-flex mt-5">
          <input type="text" className="form-control" />
          <button className="btn btn-success">Add</button>
        </form>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default Countries;
