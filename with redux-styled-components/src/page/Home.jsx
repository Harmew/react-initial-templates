import reactLogo from "../assets/react.svg";

// Styled Components
import { Logo, Card, Button } from "./styles";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { increment, decrement, incrementByAmount } from "../store/reducers/counter";

function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const actionIncrement = () => dispatch(increment());
  const actionDecrement = () => dispatch(decrement());
  const actionIncrementByFive = () => dispatch(incrementByAmount(5));

  return (
    <>
      <Logo src={reactLogo} alt="React logo" />
      <h1>React with Redux + Styled Components</h1>
      <Card>
        <Button onClick={actionIncrement}>count is {count}</Button>
        <Button onClick={actionDecrement}>decrement</Button>
        <Button onClick={actionIncrementByFive}>increment +5</Button>
      </Card>
    </>
  );
}

export default Home;
