import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Memory Game</h1>

      <p>What difficulty level do you want?</p>
      <Link to="/game?difficulty=easy">Easy</Link>

      <Link to="/game?difficulty=hard">Hard</Link>
    </div>
  );
}
