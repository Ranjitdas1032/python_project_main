import { useDispatch,useSelector } from "react-redux";
import { increament,decreament } from "../features/counter/counterSlice";

function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={(e) => {dispatch(increament())}}>increament</button>
            <button onClick={(e) => {dispatch(decreament())}}>decreament</button>
        </div>
    )
}

export default Counter;