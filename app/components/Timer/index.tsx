import { useState, useEffect } from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];
const Timer = ({ time }: { time: number }) => {
  const [width, setWidth] = useState(1.66);
  const [seconds, setSeconds] = useState(90);

  useEffect(() => {
    if (width >= 100) {
      return;
    }

    const interval = setInterval(() => {
      setWidth(width + 1.33);
      setSeconds(seconds - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time, width]);
  return (
    <>
      <div className="timer">
        <div className="loader" style={{ width: `${width}%` }}></div>
        <span>{`${seconds} seconds remaining`}</span>
      </div>
    </>
  );
};

export default Timer;
