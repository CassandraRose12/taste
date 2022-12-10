import React from "react";
import "./Countries.css";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function Countries() {
  const [recipes, setRecipes] = useState('')
  useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3004/api/recipes`)
            const resData = await response.json()
            setRecipes(resData)
            console.log(resData)
        }
        fetchData()
    }, [])
  // const [recipe, setRecipe] = useState('')
  // useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch(`https://localhost:3004/recipes`)
	// 		const resData = await response.json()
	// 		setRecipe(resData)
	// 	}
	// 	fetchData()
	// }, [])
  // useEffect(() => {
  //   const url = `https://localhost:3004/api/recipes`;
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="row1">
      <div className="column2">
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
