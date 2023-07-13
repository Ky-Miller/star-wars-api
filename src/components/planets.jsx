import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Planets = () => {
  const {id} = useParams()

  const [planet, setPlanet] = useState({})

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(res=>setPlanet(res.data))
      .catch(err=>console.log(err))
  }, [])

  const [selectQuery, setSelect] = useState('')
  const [idQuery, setId] = useState('')

  const navigator = useNavigate()

  const Search = (e) => {
    navigator(`/${selectQuery}/${idQuery}`)
  }

  return (
    <div>
            <h1>{planet.name}</h1>
            <p>{planet.climate}</p>
            {planet.surface_water?
            <p>surface water: True</p> 
            :
            <p>surface water: False</p>
          }
            <p>{planet.population}</p>
    </div>
  )
}

export default Planets