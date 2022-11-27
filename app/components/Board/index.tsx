import { useGameContext } from "~/contexts/GameContext";
import Card, { links as cardLinks } from "../Card";
import styles from "./styles.css";

export const links = () => [
  ...cardLinks(),
  { rel: "stylesheet", href: styles },
];
const Board = () => {
  const [cards] = useGameContext();
  return (
    <div className="easy">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          fruit={card.fruit}
          playable={card.playable}
          status={card.status}
          style={card.style}
        />
      ))}
    </div>
  );
};

export default Board;
