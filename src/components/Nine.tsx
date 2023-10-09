import React, { useState } from 'react';
import Counter from './Counter';

function Nine() {
    const [count, setCount] = useState<number>(0);
    
    const newAdd = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <button className='m-2 pl-10' onClick={newAdd}>Add</button>
            {Array.from({ length: count }).map((_value, index: number) => (
                <div key={index}>
                    <Counter />
                </div>
            ))}
        </div>
    );
}

export default Nine;