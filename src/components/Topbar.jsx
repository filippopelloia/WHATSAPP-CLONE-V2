import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div>
          <div className='image-user'></div>
          <h3>Name</h3>
        </div>
          
        <div>
          <SearchIcon/>
          <MoreVertIcon/>
        </div>
    </div>
  )
}
