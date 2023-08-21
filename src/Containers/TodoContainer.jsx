import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
import Header from "../Components/Header";
import { useState } from "react";

function TodoContainer() {
	const [todos, setTodos] = useState([
		{
			id: 0,
			name: "Eat Food",
			priority: "high"
		},
		{
			id: 1,
			name: "Buy shopping",
			priority: "high"
		},
		{
			id: 2,
			name: "Clean bathroom",
			priority: "low"
		},
		{
			id: 3,
			name: "Car's MOT",
			priority: "high"
		}
	]);

	return (
		<>
			<Header />
			<AddTodo setTodos={setTodos} todos={todos} />
			<TodoList todos={todos} />
		</>
	);
}

export default TodoContainer;
