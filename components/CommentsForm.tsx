import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({ slug }: any) => {
  const [error, setError]: any = useState(false)
  const [localStorage, setLocalStorage]: any = useState(null)
  const [showSuccesMessage, setShowSuccesMessage]: any = useState(false)
  const commentEl: any = useRef()
  const nameEl: any = useRef()
  const emailEl: any = useRef()
  const storeDataEl: any = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }
    submitComment(commentObj).then((res) => {
      setShowSuccesMessage(true)
      setTimeout(() => {
        setShowSuccesMessage(false)
      }, 5000)
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Comment the post
      </h3>
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
          type="text"
          ref={emailEl}
          className="w-full rounded-lg bg-red-400 px-4 py-2 text-white placeholder-white outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="ml-2 cursor-pointer text-red-500"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next comments
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs font-bold text-green-600">
          All fields are required
        </p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease inline-block rounded-full bg-red-800 px-8 py-3 text-lg text-white transition duration-500 hover:-translate-y-1 hover:bg-red-300"
        >
          Send Comment
        </button>
        {showSuccesMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-red-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
