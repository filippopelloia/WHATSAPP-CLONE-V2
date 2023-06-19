import React from 'react'

export default function CardUser(props) {
  return (
    <div className='card-user'>
        <div>
            <div className='image-user-sidebar'></div>
            <div className='info'>
                <h3>Name</h3>
                <p>Lorem ipsum dolor...</p>
            </div>
        </div>
        <div>
            <h5 className='time'>15:06</h5>
        </div>
    </div>
  )
}
