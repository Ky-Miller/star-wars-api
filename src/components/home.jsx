import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const [selectQuery, setSelect] = useState('people')
  const [idQuery, setId] = useState('')

  const navigator = useNavigate()

  const Search = (e) => {
    navigator(`/${selectQuery}/${idQuery}`)
  }

  return (
    <div>
      <form onSubmit={Search}>
        <label>Search for: </label>
        <select value={selectQuery} onChange={(e)=>setSelect(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="id"> ID: </label>
        <input id="id" type="number" onChange={(e)=>setId(e.target.value)} value={idQuery}/>
        <input type="submit" value='Search'/>
      </form>
    </div>
  )
}

export default Home