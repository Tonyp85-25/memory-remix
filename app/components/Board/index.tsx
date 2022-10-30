import type { ICard } from "~/utils/cards";
import Card, { links as cardLinks } from "../Card";
import styles from "./styles.css";

export const links = () => [
  ...cardLinks(),
  { rel: "stylesheet", href: styles },
];
const Board = ({ cards }: { cards: ICard[] }) => {
  return (
    <div className="easy">
      {cards.map((card) => (
        <Card
          key={card.id}
          fruit={card.fruit}
          playable={card.playable}
          status={card.status}
        />
      ))}
    </div>
  );
};

export default Board;
