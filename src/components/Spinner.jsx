import React from 'react'
import loading from './loadingSpinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" style={{width: "40px"}} />
    </div>
  )
}

export default Spinner