import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../Redux/Action";

const Counter = () => {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    const action = incrementCount({
      count
    });
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrementCount({
      count
    });
    dispatch(action);
  };
  const handleReset = () => {
    const action = resetCount({
      count
    });
    dispatch(action);
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>INCR +</button>
        <button onClick={handleDecrement}>DECR -</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
};
export default Counter;
