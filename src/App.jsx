import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import {nanoid} from 'nanoid'
import DataChat from './DataChat.jsx'

function App() {




  //CONTATORE
  const [counter, setCounter] = useState(0);

  //I TUOI MESSAGGI
  const [text, setText] = useState('');
  // const [saveText, setSaveText] = useState([]);

  //I MESSAGGI DI RISPOSTA
  // const [textAnswer, setTextAnswer] = useState('Come va la vita?');
  // const [answer, setAnswer] = useState([]);

  //CHAT
  const [chat, setChat] = useState([]);

  
  // console.log(text);


  useEffect(() => {
    if(counter === 0){
      setChat([DataChat[counter]])
    }else{
      setChat(prevChat => [...prevChat, DataChat[counter]])
    }
  }, [counter])


  function saveInMemory(){
    setChat(prevChat => {
      const updatedChat = [...prevChat];
      updatedChat[counter].testo = text;
      return updatedChat;
    });
    // setChat(prevChat => [{...prevChat[counter], testo: text}, ...prevChat.slice(1)])
    setCounter(prevCounter => prevCounter + 1);
  }

  console.log(chat);


  // console.log(chat);

  // function saveInMemory(){
  //   setSaveText(prevSaveText => [...prevSaveText, text]);
  //   setCounter(prevCounter => prevCounter + 1);
  // }

  // const showChat =  <>
  //                       <div className='section right-side'>
  //                         <div className='message'>{chat?.testo}</div>
  //                       </div>

  //                       <div className='section'>
  //                         <div className='message'>{chat?.answer}</div>
  //                       </div>
  //                   </>

  const showChat = chat.map(item => {
    return <>
                         <div className='section right-side'>
                           <div key={nanoid()} className='message'>{item?.testo}</div>
                         </div>

                         <div className='section'>
                           <div key={nanoid()} className='message'>{item?.answer}</div>
                         </div>
           </>
  })


  //FAI RITARDARE DI QUALCHE SECONDO LE RISPOSTE





  // const showMessage = saveText?.map(item => {
  //   return <div className='section right-side'>
  //             <div key={nanoid()} className='message'>{item}</div>
  //          </div>
  // })

  // let risposta;

  // if(counter >= 1){
  // risposta =  (<div className='section'>
  //                       <div key={nanoid()} className='message'>{textAnswer}</div>
  //                   </div>)
  // } else {
  //   console.log('Nada');
  // }


  // console.log(counter);


  return (
    <>
      <div>

        {/* <div className='message'>{saveText}</div> */}
        <div className='container'>
            <div className='section'>
              <div className='message'>Ciao amico miooo!!</div>
            </div>

            {/* <h3>{chat[0].answer}</h3> */}

            {showChat}

{/* 
            {showMessage}
            

            {risposta} */}

            {/* <div className='section'>
              <div className='message'>Hey Filippo!!</div>
            </div> */}

            <Navbar salva={() => saveInMemory()} 
                    setText={(e) => setText(e.target.value)}
            />
        </div>
      </div>
    </>
  )
}

export default App
