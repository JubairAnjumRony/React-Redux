
import Button from "./Button";
import Count from "./Count";

export default function Counter({counters,onDecrement,onIncrement}) {



    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count counters={counters} />
            <div className="flex space-x-3">
                <Button handler={onIncrement}>Increment</Button>
                <Button type="danger" handler={onDecrement}>
                    Decrement
                </Button>
                {/* <h1>Value is: {counters.value}</h1> */}
            </div>
        </div>
    );
} 