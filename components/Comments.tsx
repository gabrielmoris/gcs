import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Comments = ({ slug }: any) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)
  const commentEl: any = useRef()
  const nameEl: any = useRef()
  const emailEl: any = useRef()
  const storeDataEl: any = useRef()

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Comments</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-red-400 p-4 text-white placeholder-white outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Comment"
          name="comment"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-red-400 px-4 py-2 text-white placeholder-white outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="w-full rounded-lg bg-red-400 px-4 py-2 text-white placeholder-white outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Email"
          name="email"
        />
      </div>
    </div>
  )
}

export default Comments
