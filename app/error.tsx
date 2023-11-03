'use client'
import React from 'react'
 
interface Props{
    error: Error
    reset : () => void
}


const ErrorPage = ({ error , reset}: Props) => {
    console.log('Error haha ,,,' , error)
    return (
        <>
            <div>An Expected error has occurred haha...</div>
            <button className='btn' onClick={() =>  reset}>Retry</button>
        </>
  )
}

export default ErrorPage   