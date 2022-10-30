import type { LinksFunction } from "@remix-run/node";
import { useCallback, useState } from "react";
import type { ICard } from "~/utils/cards";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Card = ({ fruit, playable, status }: Partial<ICard>) => {
  // const [stat, setStatus] = useState(status);
  const [classes, setClasses] = useState<string>(`carte cache ${fruit}`);

  const onclickHandler = useCallback(() => {
    if (!playable) {
      return;
    }
    setClasses(`carte image ${fruit}`);
  }, [playable, fruit]);
  return <div className={classes} onClick={onclickHandler}></div>;
};

export default Card;
