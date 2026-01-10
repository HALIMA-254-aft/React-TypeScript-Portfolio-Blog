import type { Post } from "../types/post"
interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <article
      style={{
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '10px',
        backgroundColor: '#2c2c2c',
        color: '#fff',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 8px rgba(85, 5, 11, 0.1)',
        cursor: 'pointer',

      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      tabIndex={0}
    >
        
      <h2 style={{ marginBottom: '0.5rem', color:'#09fdf1', fontSize: '1.25rem' }}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  )
}

export default PostCard

