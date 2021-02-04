import React, { useState } from 'react'
import styled from 'styled-components'




const AddPlant = (props) => {

  const [plant, setPlant] = useState({
    name: '',
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
    <div className='friends-container'>
      <form onSubmit ={addplant}>
        <LogText>Name</LogText>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={plant.name}
          onChange={handleChange}
        />
        <LogText>Species</LogText>
        <input
          type='text'
          placeholder='species'
          name='species'
          value={plant.species}
          onChange={handleChange}
        />
        <LogText>H20 Frequency</LogText>
        <input
          type='text'
          placeholder='h2oFrequency'
          name='h2oFrequency'
          value={plant.h2oFrequency}
          onChange={handleChange}
        />
        <Button>Add Plant</Button>
      </form>
    </div>
  )
}
export default AddPlant; 

const LogText = styled.p`
  color: white;
  text-align: left
  `
  const Button = styled.button`
  font-size: 1em;
  margin: .5em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 350px;

  `