import React from 'react'

export default function CardUser(props) {
  return (
    <div className='card-user'>
        <div>
            <div className='image-user-sidebar'></div>
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
