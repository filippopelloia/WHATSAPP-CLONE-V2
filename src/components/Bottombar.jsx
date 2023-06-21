import React, {useState, useContext} from 'react'

import EmojiPicker from 'emoji-picker-react';

import {ChangemodeContext} from './DarkmodeContext.jsx'

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

export default function Bottombar(props) {

  const [emojiWindow, setEmojiWindow] = useState(false);
  const { mode } = useContext(ChangemodeContext);

  function showEmoji(){
    setEmojiWindow(prevEmojiWindow => !prevEmojiWindow)
  }


  const darkModeInput = () => {
    return {
      backgroundColor: mode ? '#1F2C34' : '#F1F2F6',
      color: mode ? 'rgb(229, 240, 236)' : 'fff'
    }
  }

  return (
    <>
      {emojiWindow && (
          <div className="emoji">
            <EmojiPicker
                  onEmojiClick={(emojiObject, e) => props.setText(props.text + emojiObject.emoji)}
            />
          </div>
      )}

      <div className='bottombar' style={{backgroundColor: mode ? '#1F2C34' : '#F1F2F6'}}>
        <EmojiEmotionsIcon onClick={() => showEmoji()}/>


        <AttachFileIcon/>
          <input type="text"
                 style={darkModeInput()}
                 value={props.text}
                 className='input-text'
                 placeholder='Type a message...'
                 onChange={(e) => props.setText(e.target.value)}
          />
          {props.text !== '' ? <SendIcon onClick={props.salva}/> 
          : <KeyboardVoiceIcon/>}
      </div>
    </>
  )
}
