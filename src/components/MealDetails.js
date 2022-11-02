import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const MealDetails = () => {

const [meal, setMeal ] = useState({})

const {id} = useParams()


    async function getMeal() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const json = await response.json()
      setMeal(json.meals[0])
    }



    useEffect(() => {
      getMeal()
    }, [])


  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>
    </div>
  )
}
