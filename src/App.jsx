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
				<button onClick={countHandler}>count IS NOW! {count}</button>
				<button className="flashy-button" onClick={countHandler}>FLASHY COUNT! {count}</button>
			</div>
			syntaxerror
			{{ ... }}
		</>
	);
}

export default App;
