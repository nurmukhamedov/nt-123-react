import { useRef } from 'react'

const TestInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);
    }


    return (
        <div>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button onClick={handleClick}>Get Data</button>
        </div>
    )
}

export default TestInput