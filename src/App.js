import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <div className="react">{name || '리액트'}</div>
      <input/>
    </>
  );
} 

export default App;
