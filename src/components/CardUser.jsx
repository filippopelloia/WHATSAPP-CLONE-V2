import React, {useState, useContext} from 'react'

import {ChangemodeContext} from './DarkmodeContext.jsx'

export default function CardUser(props) {

  const { mode } = useContext(ChangemodeContext);

  return (
    <div className='card-user' style={{backgroundColor: mode ? '#1F2C34' : '#F1F2F6'}}>
        <div>
            <div className='image-user-sidebar'>
              <img src={props.image} alt="image profile"/>
            </div>
            <div className='info'>
                <h3>{props.name}</h3>
                <p>{props.textMessage}</p>
            </div>
        </div>
        <div>
            <h5 className='time'>{props.time}</h5>
        </div>
    </div>
  )
}
