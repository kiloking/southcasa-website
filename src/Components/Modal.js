import React from 'react'

function Modal(props) {
  return (
    <div className=' w-full fixed z-10 h-screen inset-0'>
      {props.children}
    </div>
  )
}

export default Modal