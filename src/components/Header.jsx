import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className='mb-4'>
      <p className='text-gray-400 font-medium text-1xl'>
        {category}
      </p>
      <p className='text-lg font-normal'>{title}</p>
    </div>
  )
}

export default Header
