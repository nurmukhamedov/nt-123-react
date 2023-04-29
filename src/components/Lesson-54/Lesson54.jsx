import React from 'react'
import ComponentB from './ComponentB'
import { useContext } from 'react';
import { MyContext } from './ExampleContext';
const Lesson54 = () => {

    const { count } = useContext(MyContext);

    return (
        <div>
            {
                count
            }

            <ComponentB />
        </div>
    )
}

export default Lesson54