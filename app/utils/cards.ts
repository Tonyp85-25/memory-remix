const fruits = [
  "banana",
  "lime",
  "orange",
  "fig",
  "apricot",
  "lemon",
  "strawberry",
  "peach",
  "grape",
  "watermellon",
  "plum",
  "pear",
  "cherry",
  "raspberry",
  "passionfruit",
  "mirabelle",
];

export enum DifficultyType {
  easy = "easy",
  hard = "hard",
}
type FruitType = typeof fruits;

const difficultyData = {
  easy: { cards: 28, time: 1500 },
  hard: { cards: 32, time: 1000 },
};

export enum CardStatus {
  turned,
  hidden,
}

export interface ICard {
  readonly id: string;
  readonly fruit: FruitType[number];
  playable: boolean;
  status: CardStatus;
  style: string;
}

export const getCards = (difficulty: DifficultyType) => {
  const totalCards = difficultyData[difficulty].cards;
  const cards: ICard[] = [];
  for (let i = 0; i < totalCards; i++) {
    const index = i % 2 === 0 ? i : i - 1;
    cards.push({
      fruit: fruits[index],
      playable: true,
      status: CardStatus.hidden,
      id: "c" + i,
      style: `carte hidden ${fruits[index]}`,
    });
  }
  return cards;
};

export const getTime = (difficulty: DifficultyType) =>
  difficultyData[difficulty].time;
