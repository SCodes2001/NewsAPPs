import React from 'react'
import loadings from './Spinner.gif'
function loading() {
  return (
    <div className='text-center my-5'>
      <img src={loadings} alt="" height="200vmin" width="200vmin"/>
    </div>
  )
}

export default loading
