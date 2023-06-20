import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Topbar(props) {
  return (
    <div className='topbar'>
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
