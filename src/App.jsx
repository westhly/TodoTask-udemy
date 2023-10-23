import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodo = [
  {
    id: 1,
    title: "go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "complete online javascript",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes medication",
    completed: false,
  },
  {
    id: 4,
    title: "Complete todo  app on Frontend Mentor",
    completed: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialStateTodo);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo)=>!todo.completed));
  }

  const [filter, setFilter] = useState ("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () =>{
      switch (filter) {
        case "all":
          return todos;
        case "active":
          return todos.filter((todo) =>!todo.completed);
        case "completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      {/**Header */}
      <Header />

      <main className="container mx-auto mt-8 px-4 ">
        <TodoCreate createTodo={createTodo} />

        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>

        <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted}/>

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
