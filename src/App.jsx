import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(100);

	const countHandler = () => {
		setCount((count) => count + 5);
	};

	return (
		<>
			<h1>My count feature</h1>
			<div className='card'>
				<button onClick={countHandler}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
