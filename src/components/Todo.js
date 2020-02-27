import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, inprogress, text, onClickBtn, onClickRemove }) => (
  <li className={inprogress ? 'inprogress' : ''}>
  <div className={completed ? 'completed' : ''}>

  <div className='task' onClick={onClick}>&#9672;&nbsp;{text}</div>
     
    <button onClick={onClickBtn} className='progress_btn'>In progress</button>
    {/* <button onClick={onClickRemove} className='remove_btn'>Remove</button> */}
    </div>
  </li>
  
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickBtn: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  inprogress: PropTypes.bool.isRequired
}

export default Todo
