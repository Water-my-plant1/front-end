import React, { useEffect, useState } from 'react'
import PlantsCard from './PlantsCard'
import axiosWithAuth from './axiosWithAuth'
import AddPlant from './addplant'

const PlantPortfolio = () => {
  const [plants, setPlants] = useState([])

  const addNewPlants = item => {

      axiosWithAuth()
        .post(`/api/plants/`, item)
        .catch(err => console.log(err))
     
  setPlants([
    ...plants
  ])
  }

  useEffect(() => {
    axiosWithAuth()
      .get('/api/plants/', {})
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
export default PlantPortfolio; 