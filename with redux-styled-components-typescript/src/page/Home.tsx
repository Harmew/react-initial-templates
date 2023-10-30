// Logo
import reactLogo from "../assets/react.svg";

// Hooks
import { useSelector, useDispatch } from "../hooks/useReducer";

// Actions
import { increment, decrement, incrementByAmount } from "../store/reducers/counter";

// Styled Components
import { Logo, Card, Button } from "./styles";

function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const actionIncrement = () => dispatch(increment());
  const actionDecrement = () => dispatch(decrement());
  const actionIncrementByFive = () => dispatch(incrementByAmount(5));

  return (
    <>
      <Logo src={reactLogo} alt="React logo" />
      <h1>React with Styled Components + TS</h1>
      <Card>
        <Button onClick={actionIncrement}>count is {count}</Button>
        <Button onClick={actionDecrement}>decrement</Button>
        <Button onClick={actionIncrementByFive}>increment +5</Button>
      </Card>
    </>
  );
}

export default Home;
