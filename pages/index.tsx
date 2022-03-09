import type { NextPage } from 'next'
import Head from 'next/head'
import { title } from 'process'

const posts: { title: string; excerpt: string }[] = [
  { title: `Title 1`, excerpt: `excerpt one!` },
  { title: `Title 2`, excerpt: `another excerpt!!!!!` },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>GCS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => {
            return (
              <div>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
        </div>
        <div className="col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  )
}

export default Home
