import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Navbar from './Navbar.jsx'
// import {nanoid} from 'nanoid'
// import DataChat2 from './DataChat2.jsx'

import Marco from './users/Marco.jsx';
import Giada from './users/Giada.jsx';
import Simona from './users/Simona.jsx';

import Sidebar from './components/Sidebar.jsx'


function App() {



return (
  <div className='whatsapp'>
    <Router>
      <Sidebar/>
      {/* <ChatSection> */}
        <Routes>
          <Route path="/" element={<Marco/>}/>
          <Route path="/giada" element={<Giada/>}/>
          <Route path="/simona" element={<Simona/>}/>
        </Routes>
      {/* </ChatSection> */}
    </Router>
  </div>
)
}

export default App
