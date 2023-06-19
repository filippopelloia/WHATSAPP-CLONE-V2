import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import {nanoid} from 'nanoid'
import DataChat2 from './DataChat2.jsx'

function App() {




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
      // setChat(prevChat => [{...prevChat[counter], testo: text}, ...prevChat.slice(1)])
      // setChat(prevChat => [...prevChat, DataChat[counter]])
      setCounter(prevCounter => prevCounter + 1)
    }else{
      setChat(prevChat => [...prevChat, DataChat2[counter]])
    }
  }, [counter])


  //BACKUP
  // useEffect(() => {
  //   if(counter === 0){
  //     setChat([DataChat[counter]])
  //   }else{
  //     // setChat(prevChat => [...prevChat, DataChat[counter]])
  //     console.log('Ciao a tutti quanti!!')
  //   }
  // }, [counter])


  // useEffect(() => {
  //   if(chat[counter]?.testo !== ''){
  //     setChat([DataChat[counter].answer], [DataChat[counter].timeAnswer])
  //   }else{
  //     console.log('Ciao a tutti quanti!!')
  //   }
  // }, [saveInMemory])


  //ACTUALLY
  // function saveInMemory(){
  //   setChat(prevChat => {

  //   })
  // }


  function saveInMemory(){
    setChat(prevChat => {
      const updatedChat = [...prevChat];
      updatedChat[counter].testo = text;
      return updatedChat;
    });
    // setChat(prevChat => [{...prevChat[counter], testo: text}, ...prevChat.slice(1)])


    //DELAYING
    const delayFunction = () => {
      setCounter(prevCounter => prevCounter + 1);
    }

    const delay = 3000;
    setTimeout(delayFunction, delay);

    // if(counter === 1 || counter === 3){
    //   setCounter(prevCounter => prevCounter + 1);
    // }

  }




  useEffect(() => {

  const showChat = chat.map(item => {
    
    const messageClass = item.id === 1 ||  item.id === 3 ? 'section' : 'section right-side';

    return <>
                    
                        {/*======== TEST ========*/}

                         {((item.id === 0 || item.id === 2 || item.id === 4) && item.testo === '') ? 
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


console.log(box);
console.log(chat);
console.log(counter);







  return (
    <>
      <div>

        {/* <div className='message'>{saveText}</div> */}
        <div className='container'>
            <div className='section'>
              <div className='message'>Hey, ti ricordi di me? Sono Giulio!</div>
            </div>

            {/* <h3>{chat[0].answer}</h3> */}

            {/* {showChat} */}

{/* 
            {showMessage}
            
            

            {risposta} */}


            {box[0]}
            {box[1]}
            {box[2]}
            {box[3]}
            {box[4]}


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
