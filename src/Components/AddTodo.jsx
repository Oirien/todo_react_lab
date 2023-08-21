import { useState } from "react";

function AddTodo({ setTodos, todos }) {
	const [name, setName] = useState("");
	const [priority, setPriority] = useState("");
	const addTodo = () => {
		const newTodo = {
			id: todos.length + 1,
			name: name,
			priority: priority
		};
		setTodos([newTodo, ...todos]);
		setName("");
	};
	return (
		<>
			<h2>I add a TODO</h2>
			<div>
				<label>Name of task</label>
				<input onChange={(e) => setName(e.target.value)} value={name} />
			</div>
			<div>
				<label>Priority</label>
				<select onChange={(e) => setPriority(e.target.value)}>
					<option disabled> Please Pick a Priority</option>
					<option value="high">High</option>
					<option value="low">Low</option>
				</select>
			</div>
			<button onClick={addTodo}>Add Task to Todos</button>
		</>
	);
}

export default AddTodo;
