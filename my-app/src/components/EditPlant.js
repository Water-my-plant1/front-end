import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axiosWithAuth from './axiosWithAuth'
import { useParams } from 'react-router-dom'

const EditPlant = () => {

  const {id} = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plants/${id}`, {},)
      .then(res => {
        setPlants(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const [plant, setPlants] = useState({

      nickname: "",
      species: "",
      h2oFrequency: ""

  })

  const handleChange = e => {
    setPlants({
      ...plant,
      [e.target.name]: e.target.value,
    })
  }

    const updateplant = e =>{

        e.preventDefault();
        
        axiosWithAuth()
        .put(`/api/plants/${id}`, plant)
        .then()
        .catch(err => console.log(err))
    }

  

  return (
    <div className='friends-container'>
      <form onSubmit ={updateplant}>
        <LogText>Name</LogText>
        <input
          type='text'
          placeholder='Name'
          name='nickname'
          value={plant.nickname}
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
export default EditPlant; 

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