import React from 'react';
import ReactDom from 'react-dom';

function Modal(open, {children}) {
    if (!open) return null 

  return  ReactDom.createPortal(
    <div>{children}</div>,
    document.getElementById('portal')
  )
}

export default Modal

// Needs to be full screen on mobile and part of screen on desktop
// Z-Index will need to be greater than 1 to overlay rest of screen
//Sections: Gallery (slideshow), About Project, View Code, Languages and tech used
