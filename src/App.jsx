import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Marco from './users/Marco.jsx';
import Giada from './users/Giada.jsx';
import Simona from './users/Simona.jsx';
import Luigi from './users/Luigi.jsx';
import Giancarlo from './users/Giancarlo.jsx';
import Silvana from './users/Silvana.jsx';
import Giacomo from './users/Giacomo.jsx';
import Crystal from './users/Crystal.jsx';
import Chiara from './users/Chiara.jsx';

import Sidebar from './components/Sidebar.jsx'
import ChangemodeContext from './components/DarkmodeContext.jsx';

function App() {


return (
  <div className='whatsapp'>
    <div className='header'></div>
    <ChangemodeContext>
      <Router>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Marco/>}/>
            <Route path="/giada" element={<Giada/>}/>
            <Route path="/simona" element={<Simona/>}/>
            <Route path="/luigi" element={<Luigi/>}/>
            <Route path="/giancarlo" element={<Giancarlo/>}/>
            <Route path="/silvana" element={<Silvana/>}/>
            <Route path="/giacomo" element={<Giacomo/>}/>
            <Route path="/crystal" element={<Crystal/>}/>
            <Route path="/chiara" element={<Chiara/>}/>
          </Routes>
      </Router>
    </ChangemodeContext>
  </div>
)
}

export default App
