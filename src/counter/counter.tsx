import { increment, decrement, rest } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
export const Counter = () => {
  const counterVlaue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const incrementHandle = () => {
    dispatch(increment());
  };
  const restHandle = () => {
    dispatch(rest());
  };
  const decrementHandle = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter</h1>
      <div id="counter">{counterVlaue}</div>
      <button onClick={incrementHandle}>+</button>
      <button onClick={restHandle}>rest</button>
      <button onClick={decrementHandle}>-</button>
    </div>
  );
};
