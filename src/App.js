import { useEffect, useState } from 'react';
import ExampleClass from './components/Lesson-54/ExampleClass';
import './App.css';
import Lesson54 from './components/Lesson-54/Lesson54';
import CountriesList from './components/Lesson-54/CountriesList';


function App() {
  // const [count, setCount] = useState(0);

  // const handleCount = () => {
  //   setCount(count + 1)
  // }

  // useEffect(() => {
  //   console.log('rendered');
  // }, [count]);

  return (
    <>
      {/* {count}
      <button onClick={handleCount}>Add</button>
      <ExampleClass /> */}
      <Lesson54 />
      <CountriesList />
    </>
  );
}

export default App;
