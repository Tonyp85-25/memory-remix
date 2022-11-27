import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Timer, { links as timerLinks } from "~/components/Timer";
import { GameContextProvider } from "~/contexts/GameContext";
import type { ICard } from "~/utils/cards";
import { DifficultyType, getCards, getTime } from "~/utils/cards";
import Board, { links as boardLinks } from "../components/Board";

export function links() {
  return [...boardLinks(), ...timerLinks()];
}
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const difficulty = (url.searchParams.get("difficulty") ??
    DifficultyType.easy) as DifficultyType;

  const cards = getCards(difficulty);
  const time = getTime(difficulty);
  return json({ cards, time });
};

const Game = () => {
  const { cards, time } = useLoaderData<{ cards: ICard[]; time: number }>();
  return (
    <>
      <GameContextProvider firstCards={cards}>
        <Board />
      </GameContextProvider>
      <Timer time={time} />
    </>
  );
};

export default Game;
