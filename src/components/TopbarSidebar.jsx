import React from 'react'
import foto from '../assets/foto.jpg';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TopbarSidebar() {
  return (
    <div className='topbar-sidebar'>
        <div>
            <div className='image-profile'>
              <img src={foto} alt="Filippo Pelloia"/>
            </div>
        </div>

        <div>
            <PeopleAltIcon/>
            <DonutLargeIcon/>
            <MessageIcon/>
            <MoreVertIcon/>
        </div>
    </div>
  )
}
