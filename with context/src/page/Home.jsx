import reactLogo from "../assets/react.svg";

// Context
import { useCounter } from "../context/CounterContext";

// CSS
import styles from "./Home.module.css";

function Home() {
  const { count, setCount } = useCounter();

  return (
    <>
      <img src={reactLogo} className={styles.logo} alt="React logo" />
      <h1>React with Context</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Home;
