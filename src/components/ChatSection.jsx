import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Bottombar from './Bottombar.jsx'
// import {nanoid} from 'nanoid'
// import DataChat2 from '../DataChat2.jsx'
import Topbar from './Topbar.jsx'

import Marco from '../users/Marco.jsx';
import Giada from '../users/Giada.jsx';



export default function ChatSection() {


//       //CONTATORE
//   const [counter, setCounter] = useState(0);

//   //I TUOI MESSAGGI
//   const [text, setText] = useState('');

//   //CHAT
//   const [chat, setChat] = useState([]);

//   //test
//   const [box, setBox] = useState([]);



//   useEffect(() => {
//     if(counter === 0){
//       setChat(prevChat => [DataChat2[counter]])
//     }else if(counter === 1 || counter === 3){
//       setChat(prevChat => [...prevChat, DataChat2[counter]])
//       setCounter(prevCounter => prevCounter + 1)
//     }else{
//       setChat(prevChat => [...prevChat, DataChat2[counter]])
//     }
//   }, [counter])



//   function saveInMemory(){
//     setChat(prevChat => {
//       const updatedChat = [...prevChat];
//       updatedChat[counter].testo = text;
//       return updatedChat;
//     });


//     //DELAYING
//     const delayFunction = () => {
//       setCounter(prevCounter => prevCounter + 1);
//     }

//     const delay = 3000;
//     setTimeout(delayFunction, delay);

//   }



//   useEffect(() => {

//     const showChat = chat.map(item => {
//     const messageClass = item.id === 1 ||  item.id === 3 ? 'section' : 'section right-side';

//     return <>          

//                          {/* SE E' UGUALE A ZERO O E' PARI */}
//                          {(item.id % 2 === 0 && item.testo === '') ? 
//                          '' 
//                          : 
//                          <div className={messageClass}>
//                           <div key={nanoid()} 
//                                 id={item.id} 
//                                 className='message'>
//                                   {item?.risposta || item?.testo}
//                             </div>
//                         </div>}
//            </>
//   })

// setBox(showChat);

// }, [chat])


// const showCardMessages = box.map(item => {
//   return <>{item}</>
// })


// console.log(box);
// console.log(chat);
// console.log(counter);




  return (
    <>
        <div className='chat-section'>
            <Topbar/>
                {/* <div className='section'>
                    <div className='message'>Hey, ti ricordi di me? Sono Giulio!</div>
                </div> */}


                {/* <Router>
                    <Routes>
                        <Route path="/" element={<Marco/>}/>
                        <Route path="/giada" element={<Giada/>}/>
                    </Routes>
                </Router> */}


                {/* {showCardMessages} */}

                {/* <Bottombar salva={() => saveInMemory()} 
                        setText={(e) => setText(e.target.value)}
                /> */}
        </div>
    </>
  )
}
