import { Button } from '../button/button.component'
import likeImg from '../../assets/like.png'

import './post.style.css'

const Post = ({ id, user, data, message, likes, onDeletePost, onLike, onComment }) => {
  const handleClickDelete = () => {
    onDeletePost(id)
  }
  const handleClickLike = () => {
    onLike(id)
  }
  const handleClickComment = () => {
    onComment(id)
  }

  return (
    <li className="post">
      <div className="post__header">
        <img className="post__image" src={user.image} alt={`Foto do ${user.name}`} />
        <div className="post__user-info">
          <h2 className="post__name">{user.name}</h2>
          <h3 className="post__data">{data}</h3>
        </div>
        <p className="post__id">{`id: ${id}`}</p>
      </div>
      <div className="post__interactions">
        <img src={likeImg} alt="Likes" />
        <p>{likes}</p>
      </div>
      <p className="post__message">{message}</p>
      <div className="post__buttons">
        <Button onClick={handleClickLike}>curtir</Button>
        <Button onClick={handleClickComment}>comentar</Button>
        <Button onClick={handleClickDelete}>deletar</Button>
      </div>
      <ul></ul>
    </li>
  )
}

export { Post }
