import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dataPosts } from './data/posts'
import Header from './components/Header/Header'
import Post from './components/Post/Post'


function App() {
  
  const [ posts, setPosts ] = useState(dataPosts)

  useEffect(() => {
    const rawPosts = localStorage.getItem('posts');

    if (!rawPosts) {
      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      setPosts(JSON.parse(rawPosts));
    }
  },[])

  return (
    <>
      <Header />
      {
          posts.map( (item) => <Post { ...item } key={item.titulo} />)
        } 
    </>
  )
}

export default App
