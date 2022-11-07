import './button.style.css'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

export { Button }
