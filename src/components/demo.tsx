import { useReducer } from "react";
import './demo.css';
interface State {
    count: number;
    error: string | null;

}
interface Action {
    type: 'increment' | 'decrement';
}
const Demo = () => {

    const [state, dispatch] = useReducer(
        // reducer function
        (state: State, action: Action) => {
            const { type } = action;
            switch (type) {
                case 'increment':
                    {
                        const increment = state.count + 1;
                        const hasError = state.count >= 5;
                        {
                            return {
                                ...state, count: hasError ? state.count : increment,
                                error: hasError ? 'Max value reached' : null
                            };
                        }
                    }
                case 'decrement':
                    {
                        const decrement = state.count - 1;
                        const hasError = state.count <= 0;
                        {
                            return {
                                ...state, count: hasError ? state.count : decrement,
                                error: hasError ? 'Min value reached' : null
                            };
                        }
                    }
                default:
                    return state;
            }
        },
        // initialize state
        {
            count: 0,
            error: null,
        }
    );
    return (
        <div>
            <div>
                Count : {state.count}
            </div>
            {state.error && <div className='container'>{state.error}</div>} 
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}
export default Demo;