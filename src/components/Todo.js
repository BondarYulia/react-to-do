import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, inprogress, text }) => (
  <li>

  <div onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: inprogress ? 'red' : 'green'
    }}>{text}</div>
     
    <button>In progress</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  inprogress: PropTypes.bool.isRequired
}

export default Todo
