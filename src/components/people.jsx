import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const People = () => {
  const {id} = useParams()

  const [person, setPerson] = useState({})

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(res=>setPerson(res.data))
      .catch(err=>{
        console.log(err)
        navigator('/error')
      })
  }, []);

  const [selectQuery, setSelect] = useState('')
  const [idQuery, setId] = useState('')

  const navigator = useNavigate()

  const Search = (e) => {
    navigator(`/${selectQuery}/${idQuery}`)
  }

  return (
    <div>
      <h1>Name: {person.name}</h1>
      <p>Height: {person.height} cm</p>
      <p>Mass: {person.mass} kg</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Skin Color: {person.skin_color}</p>
    </div>
  )
}

export default People