import React, { useState } from 'react';

function Example1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return ( <
        div >
        <
        p > Hitting { count }
        times < /p> <
        button onClick = {
            () => setCount(count + 1)
        } >
        ClickMe If You Like This Website <
        /button> < /
        div >
    );
}

export default Example1;