import React from "react";
import "./Countries.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


function Countries() {
  const [recipes, setRecipes] = useState('')
  const history = useNavigate()
  useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3004/api/recipes`)
            const resData = await response.json()
            setRecipes(resData)
            console.log(resData)
        }
        fetchData()
    }, [])
    async function handleSubmit(e) {
      e.preventDefault()
  
      await fetch(`http://localhost:3004/api/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipes)
      })
  
      history('/api/recipes')
    }
  return (
    <div className="row1">
      <div className="column2">
      <h1>Add a New Country Recipe</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						required
						value={recipes.name}
						onChange={e => setRecipes({ ...recipes, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
        </div>




        <input className="btn btn-primary" type="submit" value="Add Place" />
          </form>
          
				</div>
      </div>
  );
}

export default Countries;
