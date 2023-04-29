import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ExampleContext'
const ComponentB = () => {
    const { handleCount } = useContext(MyContext);
    return (
        <div>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}

export default ComponentB