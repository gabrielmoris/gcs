import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }: any) => {
  const [comments, setComments]: any = useState([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, [])

  return (
    <>
      {comments && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment:any) => {
              <div
                key={comment.createdAt}
                className="mb-4 border-b border-red-400 pb-4"
              >
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span> on{' '}
                  {moment(comment.createdAt).format('DD MMM, YYYY')}
                </p>
                <p className="w-full whitespace-pre-line text-white">
                  {parse(comment.comment)}
                </p>
              </div>
            }
          )}
        </div>
      )}
    </>
  )
}

export default Comments
