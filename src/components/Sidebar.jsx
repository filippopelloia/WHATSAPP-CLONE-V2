import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import TopbarSidebar from './TopbarSidebar.jsx'
import CardUser from './CardUser.jsx';

import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Sidebar() {

    const [users, setUsers] = useState([
        {id: 0, name: 'Marco', textMessage: 'Hey ciao Filippo, come...', time: '18:48', url:'/'},
        {id: 1, name: 'Giada', textMessage: 'Ti ho spedito il regalo!!', time: '15:02', url:'/giada'},
        {id: 2, name: 'Simona', textMessage: 'Come stai oggi?', time: '09:02', url:'/simona'}
    ])

    

    const showUsers = users.map(item => (
            <Link to={item.url}>
                <CardUser
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    textMessage={item.textMessage}
                    time={item.time}
                />
            </Link>
    ));



    console.log(users.length);



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

        {showUsers}

    </div>
  )
}
