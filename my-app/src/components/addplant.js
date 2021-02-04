import React, { useState } from 'react'

const AddPlant = (props) => {

  const [plant, setPlant] = useState({
    nickname: '',
    species: '',
    h2oFrequency: ''
  })
  const handleChange = e => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    })
  }


    const addplant = e =>{

        e.preventDefault();
        
        props.addNewPlants(plant)
    }

  return (
    <div>
      <form onSubmit ={addplant}>
        <input
          type='text'
          placeholder='Name'
          name='nickname'
          value={plant.nickname}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='species'
          name='species'
          value={plant.species}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='h2oFrequency'
          name='h2oFrequency'
          value={plant.h2oFrequency}
          onChange={handleChange}
        />
        <button>Add Plant</button>
      </form>
    </div>
  )
}
export default AddPlant; 