import React, {useState, useEffect, useContext} from 'react'

import {nanoid} from 'nanoid'
import DataChat2 from '../DataChat2.jsx'
import Topbar from '../components/Topbar.jsx'
import Bottombar from '../components/Bottombar.jsx'
import {ChangemodeContext} from '../components/DarkmodeContext.jsx'

import user1 from '../assets/user1.jpg';

export default function Giada() {

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
          setChat(prevChat => [DataChat2[counter]])
        }else if(counter === 1 || counter === 3){
          setChat(prevChat => [...prevChat, DataChat2[counter]])
          setCounter(prevCounter => prevCounter + 1)
        }else{
          setChat(prevChat => [...prevChat, DataChat2[counter]])
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
          const messageClass = (mode ? (item.id === 1 ||  item.id === 3 ? 'section' : 'section right-side dark') : (item.id === 1 ||  item.id === 3 ? 'section' : 'section right-side'));
    
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
            <Topbar image={user1} name="Giada" />
                <div className='section'>
                    <div className='message' style={darkText()}>Ciao Filippo, sei in zona Treviso per caso?</div>
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
