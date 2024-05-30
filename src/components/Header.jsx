import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className='mb-4'>
      <p className='text-lg font-normal uppercase'>{title}</p>
    </div>
  )
}

export default Header
