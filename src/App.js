import logo from './logo.svg';
import './App.css';
const key = process.env.REACT_APP_API_KEY;

function App() {
	console.log(process.env.REACT_APP_API_KEY);
	return (
		<div className='App'>
			<h1>JJ world</h1>
		</div>
	);
}

export default App;
