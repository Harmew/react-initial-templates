import reactLogo from "../assets/react.svg";

// Context
import { useCounter } from "../context/CounterContext";

// Styled Components
import { Logo, Card, Button } from "./styles";

function Home() {
  const { count, setCount } = useCounter();

  return (
    <>
      <Logo src={reactLogo} alt="React logo" />
      <h1>React with Context + Styled Components + TS</h1>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </Card>
    </>
  );
}

export default Home;
