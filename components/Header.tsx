import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'Category 1', slug: 'category1' },
  { name: 'Category 2', slug: 'category2' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-red-300 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold">
              GCS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => {
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 ml-4 cursor-pointer align-middle font-semibold">
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
