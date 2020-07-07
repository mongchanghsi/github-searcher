import React, { useState, useEffect } from 'react';
import { ScrollButton } from './buttons/ScrollButton';

function Scroll(props){
  const { showParams } = props;
  const [show, setShow] = useState(showParams ? false : true)

  const handleScroll = () => {
        if (window.pageYOffset > showParams) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if(showParams){
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      { show && <ScrollButton onClick={handleClick}/> }
    </div>
  )
}

export default Scroll;
