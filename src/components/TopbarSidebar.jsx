import React from 'react'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TopbarSidebar() {
  return (
    <div className='topbar-sidebar'>
        <div>
            <div className='image-profile'></div>
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
