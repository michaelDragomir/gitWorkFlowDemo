import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(10);

	// const countHandler = () => {
	// 	setCount((count) => count + 5);
	// };

	return (
		<>
			<h1>hello tech 37....</h1>
			<div className='card'>
				<button onClick={countHandler}>no more code... {count}</button>
			</div>
		</>
	);
}

export default App;
