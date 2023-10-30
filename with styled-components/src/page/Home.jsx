import React from "react";

// Logo
import reactLogo from "../assets/react.svg";

// Styled Components
import { Logo, Card, Button } from "./styles";

function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Logo src={reactLogo} alt="React logo" />
      <h1>React with Styled Components</h1>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </Card>
    </>
  );
}

export default Home;
