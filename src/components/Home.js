import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

    const [ input, setInput ] = useState([])
    const [meals, setMeals ] = useState([])

    function handleInput(event) {
        setInput(event.target.value)
        console.log(event.target.value);
    }

    

        async function buttonFetch() {
            const risposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            const json = await risposta.json()
            console.log(json);
            setMeals([...json.meals])
        }




        // Arrabiata


  return (
    <div>
        <div>
            <input onChange={handleInput} value={input}/>
            <button onClick={buttonFetch}>BUTTON</button>
        </div>

        {meals.map( (pasto) => <Link to={`/MealDetails/${pasto.idMeal}`}>
        {pasto.strMeal}
        </Link>  )}

    </div>
  )
}
