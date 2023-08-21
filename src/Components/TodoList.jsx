import Todo from "./Todo";

function TodoList({ todos }) {
	const todoItems = todos.map((todo) => <Todo todo={todo} key={todo.id} />);
	return (
		<>
			<h3>Shit to do</h3>
			<ul id="todo-list">{todoItems}</ul>
		</>
	);
}

export default TodoList;
