import React, {useState, useContext} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {ChangemodeContext} from './DarkmodeContext.jsx'

export default function Topbar(props) {

  const { mode } = useContext(ChangemodeContext);

  return (
    <div className='topbar' style={{backgroundColor: mode ? '#1F2C34' : '#F1F2F6'}}>
        <div>
          <div className='image-user'>
            <img src={props.image} alt="image user"/>
          </div>
          <h3>{props.name}</h3>
        </div>
          
        <div>
          <SearchIcon/>
          <MoreVertIcon/>
        </div>
    </div> 
  )
}
