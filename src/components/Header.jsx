import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='my-4'>
      <p className='text-2xl uppercase font-bold '>{title} :</p>
    </div>
  )
}

export default Header
