import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(10);

	const countHandler = () => {
		setCount((count) => count + 5);
	};

	return (
		<>
			<h1>My cool counter update</h1>
			<div className='card'>
				<button onClick={countHandler}>count IS NOW! {count}</button>
			</div>
		</>
	);
}

export default App;
