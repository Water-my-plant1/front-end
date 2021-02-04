import React, { useEffect, useState } from 'react'
import axiosWithAuth from './axiosWithAuth'
import styled from 'styled-components'



const PlantsCard =({plant})=>{

    const [plantCard, setPlantCard] = useState({

         nickname: plant.nickname,
         species: plant.species,
         h2oFrequency: plant.h2oFrequency,
         id : plant.id
      })

      const handleChange = e => {
        setPlantCard({
          ...plantCard,
          [e.target.name]: e.target.value,
        })
      }

      const updatePlant = item => {

        axiosWithAuth()
          .put(`/api/plants/${plantCard.id}`, item,)
          .then()
          .catch(err => console.log(err))
       
    }

    return(
        <div className="friend-container">
         
             <form onSubmit ={updatePlant}>
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
                <Button>Update</Button>
             </form>
        </div>
    )
}

export default PlantsCard;  

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