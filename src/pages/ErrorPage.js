import React from 'react'
import errorImage from '../assets/errorPage.svg'

const ErrorPage = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <img src={errorImage} alt='error Page'/>
    </div>
  )
}

export default ErrorPage