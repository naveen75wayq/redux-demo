import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { increment, decrement, incrementByAmount, incrementAsync } from "../state/counterSlice";
import { voteFunction } from '../state/voteSlice'

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const isVote = useSelector((state: RootState) => state.vote.vote);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
                <br />
                <div>
                    {/* This is conditional rendering 
                        using logical operators 
                    */}
                    {/* Alternative
                        {isVote ? <p>Voted</p> : <p>Not voted</p>}
                    */}
                    {isVote && <p>Voted</p>}
                    {!isVote && <p>Not voted</p>}
                </div>
                <button onClick={() => dispatch(voteFunction())}>Vote</button>
            </div>
        </div>
    )
}
export default Counter;