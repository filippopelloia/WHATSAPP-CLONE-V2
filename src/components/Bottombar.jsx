import React from 'react'

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

export default function Bottombar(props) {



  return (
    <div className='bottombar'>
      <EmojiEmotionsIcon/>
      <AttachFileIcon/>
        <input type="text"
               className='input-text'
               placeholder='Type a message...'
               onChange={props.setText}
        />
        {/* <button onClick={props.salva}>Send</button> */}
        {props.text !== '' ? <SendIcon onClick={props.salva}/> 
        : <KeyboardVoiceIcon/>}
    </div>
  )
}
