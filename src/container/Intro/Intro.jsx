import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';

import './Intro.css';

const Intro = () => {
  const [PlayVideo,setPlayVideo]=React.useState(false);
  const vidRef = React.useRef();
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo);
    if(PlayVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
    return(
      <div className='app__Video'>
      <video 
      src={meal}
      ref={vidRef}
      type="vedio/mp4"
      controls={false}
      loop
      muted
      />
      <div className='app__Video-overlay flex__center'>
        <div className='app__Video-overlay_circle flex__center'
        onClick={handleVideo}
        >
          {PlayVideo?
            <BsPauseFill color='#fff' fontSize={30}/> :
          <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
    </div>
    )
}

export default Intro;
