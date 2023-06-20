import React, {useContext} from 'react'
import foto from '../assets/foto.jpg';
import Mode from './Mode.jsx'
import {ChangemodeContext} from './DarkmodeContext.jsx'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';


export default function TopbarSidebar() {

  const { mode, changeMode } = useContext(ChangemodeContext);

  //STILE DARK - LIGHT MODE
  const darkText = () => {
    return{
      color: mode ? '#E5F0EC' : '#52636D',
      backgroundColor: mode ? '#1F2C34' : '#F1F2F6'  
    }
  }


  return (
    <div className='topbar-sidebar' style={darkText()}>
        <div>
            <div className='image-profile'>
              <img src={foto} alt="Filippo Pelloia"/>
            </div>
        </div>

        <div>
            <PeopleAltIcon/>
            <DonutLargeIcon/>
            <MessageIcon/>
            <div className='mode-btn'>
              <Mode changeMode={() => changeMode()} />
            </div>
        </div>
    </div>
  )
}
