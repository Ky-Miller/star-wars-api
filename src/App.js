import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import People from './components/people';
import Planets from './components/planets';
import Error_page from './components/error_page';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path= "/people/:id" element= {<People />} />
        <Route path= "/planets/:id" element={<Planets />} />
        <Route path='/error' element= {<Error_page/>} />
      </Routes>
    </div>
  );
}

export default App;
