import React, {useState, useContext} from 'react'

import {ChangemodeContext} from './DarkmodeContext.jsx'

export default function CardUser(props) {

  const { mode } = useContext(ChangemodeContext);

    //STILE DARK - LIGHT MODE
    const darkText = () => {
      return{
        color: mode ? '#E5F0EC' : '#52636D',
        backgroundColor: mode ? '#1F2C34' : '#F1F2F6'  
      }
    }

  return (
    <div className='card-user' style={darkText()}>
        <div>
            <div className='image-user-sidebar'>
              <img src={props.image} alt="image profile"/>
            </div>
            <div className='info'>
                <h3 style={darkText()}>{props.name}</h3>
                <p style={darkText()}>{props.textMessage}</p>
            </div>
        </div>
        <div>
            <h5 className='time' style={darkText()}>{props.time}</h5>
        </div>
    </div>
  )
}
