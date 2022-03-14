import React from 'react'

const Author = ({author}:any) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-20'>
      <img
      alt={author.name}
      height="100px"
      width="100px"
      src={author.photo.url}
      className="align-middle rounded-full"
      />
      
    </div>
  )
}

export default Author