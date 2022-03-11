import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories]: any = useState([])

  useEffect(() => {
    getCategories().then((category) => setCategories(category))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category: any) => {
        return (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="mb-3 block cursor-pointer pb-3 transition duration-500 hover:text-red-700 hover:underline">
              #{category.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
