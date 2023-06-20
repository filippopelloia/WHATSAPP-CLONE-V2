import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';
import {ChangemodeContext} from './DarkmodeContext.jsx'

import TopbarSidebar from './TopbarSidebar.jsx'
import CardUser from './CardUser.jsx';

import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';

import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import user5 from '../assets/user5.jpg';
import user6 from '../assets/user6.jpg';
import user7 from '../assets/user7.jpg';
import user8 from '../assets/user8.jpg';
import user9 from '../assets/user9.jpg';


export default function Sidebar() {

    const [users, setUsers] = useState([
        {id: 0, name: 'Marco', textMessage: 'Hey ciao Filippo, come...', time: '18:48', url:'/', image:`${user5}`},
        {id: 1, name: 'Giada', textMessage: 'Ti ho spedito il regalo!!', time: '15:02', url:'/giada', image:`${user1}`},
        {id: 2, name: 'Simona', textMessage: 'Hai visto il film Dune? Quello...', time: '07:10', url:'/simona', image:`${user2}`},
        {id: 3, name: 'Luigi', textMessage: 'Vieni con me in Portogallo a Novembre?', time: '09:02', url:'/luigi', image:`${user6}`},
        {id: 4, name: 'Giancarlo', textMessage: 'Ho fame', time: '09:02', url:'/giancarlo', image:`${user7}`},
        {id: 5, name: 'Silvana', textMessage: 'Mi sa che non ci vedremo domani...', time: '17:55', url:'/silvana', image:`${user3}`},
        {id: 6, name: 'Giacomo', textMessage: 'Ho trovato il lavoro che sognavo!!!', time: '22:02', url:'/giacomo', image:`${user8}`},
        {id: 7, name: 'Crystal', textMessage: 'Ma perchè hanno aumentato il prezzo di Netflix?', time: '05:59', url:'/crystal', image:`${user4}`},
        {id: 8, name: 'Chiara', textMessage: 'La Giulia mi ha scritto...', time: '17:17', url:'/chiara', image:`${user9}`},
    ])

    const [results, setResults] = useState(users);
    const {mode} = useContext(ChangemodeContext);

    //STILE DARK - LIGHT MODE
    const darkText = () => {
        return{
            color: mode ? '#E5F0EC' : '#52636D',
            backgroundColor: mode ? '#1F2C34' : '#F1F2F6'  
        }
    }


    useEffect(() => {
        setResults(users);
    }, [users])


    function searchUser(e){
        const inputValue = e.target.value
        const filteredUser = users.filter(user => 
            user.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
        setResults(filteredUser);
    }


    const showUsers = results.map(item => (
            <Link to={item.url}>
                <CardUser
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    textMessage={item.textMessage}
                    time={item.time}
                    image={item.image}
                />
            </Link>
    ));


  return (
    <div className='sidebar' style={darkText()}>
        <TopbarSidebar />
        <div className='input-section' style={darkText()}>
            <input type="text" 
                   style={darkText()}
                   placeholder="Search a user..."
                   className='input-text-sidebar'
                   onChange={(e) => searchUser(e)}
            />
            <AppsIcon/>
        </div>

        <div className='archive-section' style={darkText()}>
            <ArchiveIcon/>
            <h4 style={darkText()}>Archive</h4>
        </div>

        <div className='contacts'>
            {showUsers}
        </div>

    </div>
  )
}
