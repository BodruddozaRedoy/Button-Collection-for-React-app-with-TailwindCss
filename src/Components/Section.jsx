import React from 'react'

const Section = ({children}) => {
  return (
    <div className='flex flex-col m-10 gap-10 items-center justify-center'>{children}</div>
  )
}

export default Section