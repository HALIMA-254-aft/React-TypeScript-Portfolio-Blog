import { useState } from 'react'
import type { Post } from './types/post'
import PostCard from './components/postcard'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/ Navbar'

function App() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "Understanding React Components",
      body: "React components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.",
      userId: 0
    },
    {
      id: 2,
      title: "Getting Started with TypeScript",
      body: "TypeScript adds static typing to JavaScript, helping developers catch errors early and write more robust code.",
      userId: 0
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      body: "ES6 introduced arrow functions, classes, template literals, and destructuring.",
      userId: 0
    },
    {
      id: 4,
      title: "Managing State in React",
      body: "Learn about useState, useEffect, and context API to handle state effectively.",
      userId: 0
    },
    {
      id: 5,
      title: "Fetching Data with React",
      body: "Learn how to fetch data from APIs using fetch or Axios and display it effectively.",
      userId: 0
    }
  ])

  return (
    <>
      <Navbar />
      <main
        style={{
          padding: '2rem',
          maxWidth: 800,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#00bcd4' }}>
          React + TypeScript Blog
        </h1>

        <section id="blog" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App