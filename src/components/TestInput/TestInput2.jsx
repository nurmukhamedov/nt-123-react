import { useState } from 'react';


const TestInput2 = () => {
    const [value, setValue] = useState('');

    const handleChangeInput = (e) => {
        setValue(e.target.value)
    }
    console.log('Rendered');
    console.log(value);

    return (
        <div>
            <label>
                Last Name:
                <input type="text" value={value} onChange={handleChangeInput} />

            </label>
        </div>
    )
}

export default TestInput2