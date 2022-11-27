import type { ReactElement } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import type { ICard } from "~/utils/cards";
import { CardStatus } from "~/utils/cards";

type GameType = [ICard[], (id: string) => void, (fruit: string) => void];
const defaultState: GameType = [[], () => {}, () => {}];
const GameContext = createContext<GameType>(defaultState);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error(
      "useGameContext must be used within a GameContextProvider "
    );
  }
  return context;
};

export const GameContextProvider = ({
  firstCards,
  children,
}: {
  firstCards: ICard[];
  children?: string | ReactElement | ReactElement[];
}) => {
  const [cards, setCards] = useState<ICard[]>(firstCards);
  const [fruits, setFruit] = useState<string[]>([]);

  const playedCards = useMemo(() => fruits.length, [fruits]);
  const [pairs, setPairs] = useState(0);
  console.log(playedCards);
  console.log("fruits", fruits);

  const value: GameType = useMemo(() => {
    const validateCards = (id: string) => {
      if (playedCards >= 2 || playedCards === 0) {
        console.log("played");

        return;
      }
      let updatedCard = {};
      const card = cards.find((card) => card.id === id);
      if (card?.playable) {
        return;
      }

      if (fruits[0] === fruits[1]) {
        updatedCard = {
          playable: false,
          status: CardStatus.turned,
          style: `carte turned ${card?.fruit}`,
          ...card,
        };
        let newPair = pairs + 1;
        setPairs(newPair);
      } else {
        updatedCard = {
          playable: true,
          status: CardStatus.hidden,
          style: `carte turned ${card?.fruit}`,
          ...card,
        };
      }
      setCards({ ...updatedCard, ...cards });
    };

    const addFruit = (fruit: string) => {
      return setFruit([fruit, ...fruits]);
    };
    return [cards, validateCards, addFruit];
  }, [cards, fruits, pairs, playedCards]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
