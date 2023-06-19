import React from 'react'

import TopbarSidebar from './TopbarSidebar.jsx'

import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <TopbarSidebar />
        <div className='input-section'>
            <input type="text" 
                   placeholder="Search a user..."
                   className='input-text-sidebar'
            />
            <AppsIcon/>
        </div>

        <div className='archive-section'>
            <ArchiveIcon/>
            <h4>Archive</h4>
        </div>
    </div>
  )
}
