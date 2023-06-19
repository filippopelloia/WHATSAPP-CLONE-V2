import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import {nanoid} from 'nanoid'
// import DataChat from './DataChat.jsx'
import DataChat2 from './DataChat2.jsx'

function App() {




  //CONTATORE
  const [counter, setCounter] = useState(0);

  //I TUOI MESSAGGI
  const [text, setText] = useState('');

  //CHAT
  const [chat, setChat] = useState([]);



  useEffect(() => {
    if(counter === 0){

      setChat([DataChat2[counter]])

    }else if(counter === 1 || counter === 3){

      setChat(prevCount => [...prevCount, DataChat2[counter]])
      // setChat(prevChat => [{...prevChat[counter], testo: text}, ...prevChat.slice(1)])
      // setChat(prevChat => [...prevChat, DataChat[counter]])
      // setCounter(prevCounter => prevCounter + 1)

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
    const delayFunction = () => {
      setCounter(prevCounter => prevCounter + 1);
    }

    const delay = 3000;
    setTimeout(delayFunction, delay);
  }

  console.log(chat);
  console.log(counter);




  const showChat = chat.map(item => {
    return <>
                         {/* <div className='section right-side'>
                           <div key={nanoid()} 
                                id={item.id} 
                                className='message'>{item?.testo}</div>
                         </div>

                         {<div className='section'>
                           <div key={nanoid()} className='message'>{item?.risposta}</div>
                         </div>} */}



                        {/*======== TEST ========*/}

                         <div className={counter === 1 || counter === 3 ? 'section' : 'section right-side'}>
                           <div key={nanoid()} 
                                id={item.id} 
                                className='message'>{counter === 1 || counter === 3 ? item?.risposta : item?.testo}</div>
                         </div>

                         {/* {<div className='section'>
                           <div key={nanoid()} className='message'>{item?.risposta}</div>
                         </div>} */}
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
              <div className='message'>Hey, ti ricordi di me? Sono Giulio!</div>
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
