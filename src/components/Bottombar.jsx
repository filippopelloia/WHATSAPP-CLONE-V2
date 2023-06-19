import React, {useState} from 'react'

export default function Bottombar(props) {

  return (
    <div className='bottombar'>
        <input type="text"
               className='inpute-text'
               placeholder='Type a message...'
               onChange={props.setText}
        />
        <button onClick={props.salva}>Send</button>
    </div>
  )
}
