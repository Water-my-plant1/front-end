import React, { useEffect, useState } from 'react'
import PlantsCard from './PlantsCard'
import axiosWithAuth from './utils/axiosWithAuth'
import AddPlant from './addplant'

const PlantPortfolio = () => {
  const [plants, setPlants] = useState([])

  const addNewPlants = item => {
    const newPlant = {
      id: Date.now(),
      name: item.name,
      species: item.species,
      h2oFrequency : item.h2oFrequency
    }
  setPlants([
    ...plants,newPlant
  ])
  }

  useEffect(() => {
    axiosWithAuth()
      .get('/plants', {})
      .then(res => {
        setPlants(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='plants-container'>
      <div>
        {plants.map(plantObject => (
          <PlantsCard plant={plantObject} />
        ))}
      </div>
      <AddPlant addNewPlants={addNewPlants} />
    </div>
  )
}
export default PlantsPortfolio; 