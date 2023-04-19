import myStyles from './ComponentA.module.css'

function ComponentA() {

    const myStyle = {
        color: 'red',
        fontSize: '18px'
    }
    return (
        <div>
            <p style={myStyle}>
                Hello World
            </p>
            <h1 className={myStyles.title}>
                Hello from Component A
            </h1>
        </div>
    )
}

export default ComponentA;