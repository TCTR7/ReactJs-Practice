
import TodoFilters from '../components/todos/TodoFilters'
import TodoInput from '../components/todos/TodoInput'
import TodoList from '../components/todos/TodoList'

export default function TodoPage() {
  return (
    <div className='max-w-2xl mx-auto p-4 mt-10 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>📝 Todo List</h1>
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </div>
  )
}
