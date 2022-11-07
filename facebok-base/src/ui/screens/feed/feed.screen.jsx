import { useState } from 'react'
import { Post, Button } from '../../components'
import { BASE_POST } from '../../../constants'

import './feed.style.css'

const FeedScreen = () => {
  const [posts, setPosts] = useState([])

  const handleClickAddPost = () => {
    const id = Date.now()
    const newPost = { ...BASE_POST, id }
    setPosts([...posts, newPost])
  }

  const handleDeletePost = postId => {
    const updatedPosts = posts.filter(post => post.id !== postId)
    setPosts(updatedPosts)
  }

  const handleLikePost = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 }
      } else {
        return post
      }
    })
    setPosts(updatedPosts)
  }
  const handleCommentPost = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, 'aba'] }
      } else {
        return post
      }
    })
    setPosts(updatedPosts)
  }

  return (
    <main className="feed__main">
      <Button onClick={handleClickAddPost}>adicionar post</Button>
      <ul className="feed__posts">
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            message={post.message}
            data={post.data}
            likes={post.likes}
            onDeletePost={handleDeletePost}
            onLike={handleLikePost}
            onComment={handleCommentPost}
          />
        ))}
      </ul>
    </main>
  )
}

export { FeedScreen }
