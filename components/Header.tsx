import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories]: any = useState([])

  useEffect(() => {
    getCategories().then((category) => setCategories(category))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-red-300 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold">GCS</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: any) => {
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                  {category.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
