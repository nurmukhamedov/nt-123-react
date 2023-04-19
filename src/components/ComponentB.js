import React from 'react'
import myStyles from './ComponentB.module.css'

const ComponentB = () => {
    return (
        <div>
            <h1 className={myStyles.title}>
                Hello from Component B
            </h1>
        </div>
    )
}

export default ComponentB