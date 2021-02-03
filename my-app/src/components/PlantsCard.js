import React from "react"


const PlantsCard =({plant})=>{
    return(
        <div className="friend-container">
            <h2> Name:{plant.name}</h2>
            <p> Species:{plant.species}</p>
            <p> h2oFrequency:{plant.h2oFrequency}</p>
        </div>
    )
}

export default PlantsCard;  