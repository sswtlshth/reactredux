import  React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleToDoList'
import AddTodo from '../containers/AddToDo';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App