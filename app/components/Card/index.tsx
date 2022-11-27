import type { LinksFunction } from "@remix-run/node";
import { useCallback, useRef, useState } from "react";
import { useGameContext } from "~/contexts/GameContext";
import type { ICard } from "~/utils/cards";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Card = ({ id, fruit, playable, status, style }: ICard) => {
  const [, validateCards, addFruit] = useGameContext();

  const onclickHandler = useCallback(() => {
    if (!playable) {
      console.log("not playable");

      return;
    }
    // setClasses(`carte turned ${fruit}`);
    addFruit(fruit);
    validateCards(id);
  }, [playable, fruit]);
  return <div className={style} onClick={onclickHandler}></div>;
};

export default Card;
