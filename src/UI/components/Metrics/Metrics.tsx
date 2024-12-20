import { useGameStore } from "../../../store/gameStore";

export const Metrics = () => {
  const metrics = useGameStore((state) => state.metrics);
  const { buildings } = useGameStore((state) => state.map);

  return (
    <ul>
      <li>Money: {Math.round(metrics.money)}</li>
      <li>
        Inhabitants: {metrics.inhabitants} / {metrics.inhabitantsCapacity}
      </li>
      <li>
        Happiness:{" "}
        {Object.values(buildings).reduce((acc, c) => (acc += c.happiness), 0) /
          Object.values(buildings).length}
      </li>
      <li>
        Working people: {metrics.workingPeople} / {metrics.workingCapacity}
      </li>
      <li>
        Unemployed people: {metrics.inhabitantsCapacity - metrics.workingPeople}
      </li>
      <li>Economic efficiency: {metrics.economicEfficiency.toFixed(2)}</li>
      <li>Raw income: {metrics.rawIncome.toFixed(2)}</li>
      <li>
        Actual Income:{" "}
        {(metrics.rawIncome * metrics.economicEfficiency).toFixed(2)}
      </li>
      <li>Fun:</li>
    </ul>
  );
};
