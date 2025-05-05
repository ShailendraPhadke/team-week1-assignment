import { useState } from "react";

interface ICounter {
    initialValue: number;
}

const Counter: React.FC<ICounter> = ({ initialValue }) => {
    const [counter, setCounter] = useState(initialValue);

    const handlerCounter = (opr: string) => {
        opr === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
    }

    return (
        <section>
            <h1>Counter Example</h1>
            <hr />
            <h2>{counter}</h2>
            <button onClick={() => handlerCounter("+")}>Increment</button>
            <button onClick={() => handlerCounter("-")}>Decrement</button>
        </section>
    );
}

export default Counter;