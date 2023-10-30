import React from "react";

// Logo
import reactLogo from "../logo.svg";

// CSS
import styles from "./Home.module.css";

function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <img src={reactLogo} className={styles.logo} alt="React logo" />
      <h1>React with CRA</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Home;
