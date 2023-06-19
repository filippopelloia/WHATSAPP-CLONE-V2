import React, {useState, useEffect} from 'react'

import {nanoid} from 'nanoid'
import DataChat8 from '../DataChat8.jsx'
import Topbar from '../components/Topbar.jsx'
import Bottombar from '../components/Bottombar.jsx'

import user4 from '../assets/user4.jpg';

export default function Crystal() {


      //CONTATORE
      const [counter, setCounter] = useState(0);

      //I TUOI MESSAGGI
      const [text, setText] = useState('');
    
      //CHAT
      const [chat, setChat] = useState([]);
    
      //test
      const [box, setBox] = useState([]);
    
    
    
      useEffect(() => {
        if(counter === 0){
          setChat(prevChat => [DataChat8[counter]])
        }else if(counter === 1 || counter === 3){
          setChat(prevChat => [...prevChat, DataChat8[counter]])
          setCounter(prevCounter => prevCounter + 1)
        }else{
          setChat(prevChat => [...prevChat, DataChat8[counter]])
        }
      }, [counter])
    
    
    
      function saveInMemory(){
        setChat(prevChat => {
          const updatedChat = [...prevChat];
          updatedChat[counter].testo = text;
          return updatedChat;
        });
    
    
        //DELAYING
        const delayFunction = () => {
          setCounter(prevCounter => prevCounter + 1);
        }
    
        const delay = 3000;
        setTimeout(delayFunction, delay);
    
      }
    
    
    
      useEffect(() => {
    
        const showChat = chat.map(item => {
        const messageClass = item.id === 1 ||  item.id === 3 ? 'section' : 'section right-side';
    
        return  <>          
                      {/* SE E' UGUALE A ZERO O E' PARI */}
                      {(item.id % 2 === 0 && item.testo === '') ? 
                      '' 
                      : 
                      <div className={messageClass}>
                      <div key={nanoid()} 
                            id={item.id} 
                            className='message'>
                              {item?.risposta || item?.testo}
                        </div>
                    </div>}
               </>
      })
    
    setBox(showChat);
    
    }, [chat])
    
    
    const showCardMessages = box.map(item => {
      return <>{item}</>
    })
    
    
    // console.log(box);
    // console.log(chat);
    // console.log(counter);
    
    




  return (
      <>
        <div className='chat-section'>
            <Topbar image={user4} />
                <div className='section'>
                    <div className='message'>Ma perchè hanno aumentato il prezzo di Netflix?</div>
                </div>


              {showCardMessages}


              <Bottombar salva={() => saveInMemory()} 
                      setText={(e) => setText(e.target.value)}
              />

        </div>
      </>
  )
}