import React, {useState} from 'react'

export default function Navbar(props) {

  return (
    <div className='navbar'>
        <input type="text"
               className='inpute-text'
               placeholder='Type a message...'
               onChange={props.setText}
        />
        <button onClick={props.salva}>Send</button>
    </div>
  )
}
