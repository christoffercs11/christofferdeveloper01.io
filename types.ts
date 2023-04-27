export type Pokemon = {
    id: number;
    name: string;
    type: string[];
    baseStats: {
      HP: number;
      Attack: number;
      Defense: number;
      "Sp. Attack": number;
      "Sp. Defense": number;
      Speed: number;
    };
  };