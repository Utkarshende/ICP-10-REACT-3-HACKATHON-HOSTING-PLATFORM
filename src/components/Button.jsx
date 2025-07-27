import React from 'react'

function Button({BtnTitle,onclick}) {
  return (
    <div>
      <button onClick={onclick} className='w-fit py-2 px-4 bg-[#D1EE6B]'>{BtnTitle}</button>
    </div>
  )
}

export default Button
