
import './App.css';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState(false);
  const handleChanger = () => {
    setColor(!color)
  }
  console.log('Hello World');
  return (
    <>
      <div className={color ? 'active' : 'passive'}>
        <button className='btn' onClick={handleChanger}>
          {color ? 'Light' : 'Dark'}
        </button>
      </div>

    </>
  );
}

export default App;
