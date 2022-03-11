import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts]: any = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className="shadow-ls mb-8 rounded-lg bg-white p-8">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post: any) => {
        return (
          <div key={post.title} className="mb-4 flex w-full items-center">
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="60px"
                width="60px"
                className="rounded-full align-middle"
                src={post.featuredImage.url}
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className="text-xs text-gray-500">
                {moment(post.createdAt).format('DD MMM YYYY')}
              </p>
              <Link key={post.title} href={`/post/${post.slug}`}>
                <p className="text-md hover:text-red-700 hover:underline cursor-pointer transition duration-500">
                  {post.title}
                </p>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostWidget
