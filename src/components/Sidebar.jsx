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
        {id: 2, name: 'Simona', textMessage: 'Hai visto il film Dune? Quello...', time: '07:10', url:'/simona'},
        {id: 3, name: 'Luigi', textMessage: 'Vieni con me in Portogallo a Novembre?', time: '09:02', url:'/luigi'},
        {id: 4, name: 'Giancarlo', textMessage: 'Ho fame', time: '09:02', url:'/giancarlo'},
        {id: 5, name: 'Silvana', textMessage: 'Mi sa che non ci vedremo domani...', time: '17:55', url:'/silvana'},
        {id: 6, name: 'Giacomo', textMessage: 'Ho trovato il lavoro che sognavo!!!', time: '22:02', url:'/giacomo'},
        {id: 7, name: 'Crystal', textMessage: 'Ma perchè hanno aumentato il prezzo di Netflix?', time: '05:59', url:'/crystal'},
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
