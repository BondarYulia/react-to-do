import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { inProgress } from '../actions'
import { remove } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => (!t.inprogress) && (!t.completed))
    case VisibilityFilters.SHOW_PROGRESS:
      return todos.filter(t => (t.inprogress) && (!t.completed))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
  return {
  inProgress: id => dispatch(inProgress(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  // remove: id => dispatch(remove(id)),
  dispatch
}
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
