import { EffectType } from "../store/gameStore";
import { BuildingType } from "../types/buildings";
import { Building } from "./Buildings/Building";

export const BUILDINGS_CLASSES = {
  HOUSE: Building,
  OFFICE: Building,
  ICE_CREAM: Building,
};

export interface BuildingConfig {
  price: number[];
  income: number[];
  inhabitantsCapacity: number[];
  happiness: number[];
  workingCapacity: number[];
  size: number;
  effect?: {
    type: EffectType;
    radius: number;
    color: string;
  };
}

export const BUILDINGS_CONFIG: Record<BuildingType, BuildingConfig> = {
  HOUSE: {
    price: [50, 100, 150],
    inhabitantsCapacity: [2, 4, 8],
    happiness: [10, 8, 6],
    income: [0, 0, 0],
    workingCapacity: [0, 0, 0],
    size: 1,
  },
  OFFICE: {
    price: [500, 200, 300],
    inhabitantsCapacity: [0, 0, 0],
    happiness: [0, 0, 0],
    income: [10, 20, 30],
    workingCapacity: [10, 10, 10],
    size: 2,
  },
  ICE_CREAM: {
    price: [200, 300, 400],
    inhabitantsCapacity: [0, 0, 0],
    happiness: [10, 10, 10],
    income: [10, 20, 30],
    workingCapacity: [2, 3, 4],
    size: 1,
    effect: {
      type: "FUN",
      radius: 3,
      color: "blue",
    },
  },
};