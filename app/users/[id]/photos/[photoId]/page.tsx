import React from 'react'
interface Props{
    params : {id : number}
}


const photosPage = ({params : {id}} : Props) => {
  return (
      <div>photosPage {id}</div>
  )
}

export default photosPage