import "../TodoItem.css"

function Todo({ todo }) {
	return (
		<li key={todo.id} className={todo.priority}>
			<h3>{todo.name}</h3>
		</li>
	);
}

export default Todo;
