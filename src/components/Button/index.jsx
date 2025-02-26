import React from 'react'
// import "./style.css"

function Button({text, onBtnClick, blue, className}) {
  return (
//     <button className={ blue?`bg-primary inline-block text-white px-4 py-2 rounded-lg ${className}`:'bg-gray-300 px-4 py-2 rounded-lg'} onClick={onBtnClick}>{text}</button>
//   )
<button className={`px-4 py-2 rounded-lg ${className} ${blue?'bg-primary inline-block text-white':'bg-gray-300'}`} onClick={onBtnClick}>{text}</button>
  )
}

export default Button