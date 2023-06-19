import React, {useState} from 'react'

import EmojiPicker from 'emoji-picker-react';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

export default function Bottombar(props) {

  const [emojiWindow, setEmojiWindow] = useState(false);

  function showEmoji(){
    setEmojiWindow(prevEmojiWindow => !prevEmojiWindow)
  }

  return (
    <>
      {emojiWindow && <div className="emoji"><EmojiPicker/></div>}
      <div className='bottombar'>
        <EmojiEmotionsIcon onClick={() => showEmoji()}/>
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
    </>
  )
}
