import React from 'react'
import Image from 'next/image'

const Author = ({ author }: any) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-white bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          src={author.photo.url}
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-lg">{author.bio}</p>
    </div>
  )
}

export default Author
