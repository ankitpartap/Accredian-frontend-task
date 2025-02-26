import React from 'react'
// import "./style.css"

function Button({text, onBtnClick, blue, className}) {
  return (
    <button className={`px-4 py-2 rounded-lg hover:cursor-pointer ${className} ${blue?'bg-primary inline-block text-white':'bg-gray-300'}`} onClick={onBtnClick}>{text}</button>
  )
}

export default Button