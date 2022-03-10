import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }: any) => {
  // console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover object-center rounded-t-lg absolute h-80 w-full object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1
        className="mb-8 cursor-pointer text-center text-3xl font-semibold 
        transition duration-700 hover:text-red-600
        "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
        </div>
      </div>
    </div>
  )
}

export default PostCard
