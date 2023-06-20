import React, {useState, useEffect, useContext} from 'react'

import {nanoid} from 'nanoid'
import DataChat3 from '../DataChat3.jsx'
import Topbar from '../components/Topbar.jsx'
import Bottombar from '../components/Bottombar.jsx'
import {ChangemodeContext} from '../components/DarkmodeContext.jsx'

import user2 from '../assets/user2.jpg';

export default function Simona() {

  const { mode } = useContext(ChangemodeContext);
  
  //STILE DARK - LIGHT MODE
  const darkText = () => {
    return{
      color: mode ? '#E5F0EC' : '#52636D',
      backgroundColor: mode ? '#1F2C34' : '#F1F2F6'  
    }
  }



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
          setChat(prevChat => [DataChat3[counter]])
        }else if(counter === 1 || counter === 3){
          setChat(prevChat => [...prevChat, DataChat3[counter]])
          setCounter(prevCounter => prevCounter + 1)
        }else{
          setChat(prevChat => [...prevChat, DataChat3[counter]])
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
                            style={darkText()}
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
    


  return (
      <>
         <div className={mode ? 'chat-section dark-back' : 'chat-section light-back'}>
            <Topbar image={user2} name="Simona" />
                <div className='section'>
                    <div className='message' style={darkText()}>Hai visto il film Dune? Quello del 2021.</div>
                </div>


              {showCardMessages}


              <Bottombar salva={() => saveInMemory()} 
                         setText={setText}
                         typeEmoji={setText}
                         text={text}
              />

        </div>
      </>
  )
}
