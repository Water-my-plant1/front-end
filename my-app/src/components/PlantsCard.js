import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'



const PlantsCard =({plant})=>{
    return(
        <div className="friend-container">
            <h2> Name:{plant.name}</h2>
            <p> Species:{plant.species}</p>
            <p> h2oFrequency:{plant.h2oFrequency}</p> 

            <Link to= {`/Edit/${plant.id}`}>Edit</Link>

        </div>
    )
}

export default PlantsCard;  