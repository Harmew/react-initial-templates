import reactLogo from "../assets/react.svg";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { increment, decrement, incrementByAmount } from "../store/reducers/counter";

// CSS
import styles from "./Home.module.css";

function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const actionIncrement = () => dispatch(increment());
  const actionDecrement = () => dispatch(decrement());
  const actionIncrementByFive = () => dispatch(incrementByAmount(5));

  return (
    <>
      <img src={reactLogo} className={styles.logo} alt="React logo" />
      <h1>React with Redux</h1>
      <div className={styles.card}>
        <button onClick={actionIncrement}>count is {count}</button>
        <button onClick={actionDecrement}>decrement</button>
        <button onClick={actionIncrementByFive}>increment +5</button>
      </div>
    </>
  );
}

export default Home;
