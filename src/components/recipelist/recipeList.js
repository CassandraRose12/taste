import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function RecipeList(data) {
    const [recipes, setRecipes] = useState('')
    useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(`https://localhost:3004/api/recipes`)
              const resData = await response.json()
              setRecipes(resData)
              console.log(resData)
          }
          fetchData()
      }, [])}