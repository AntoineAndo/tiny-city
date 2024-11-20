import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../store/gameStore";
import React from "react";
import { MetricsManager } from "../managers/MetricsManager";
import { Building } from "../config/Buildings/Building";

type Props = {};

function GameLoop({}: Props) {
  const map = useGameStore((state) => state.map);
  const effectMaps = useGameStore((state) => state.effectMaps);
  const getMetrics = useGameStore((state) => state.getMetrics);
  const setMetrics = useGameStore((state) => state.setMetrics);

  const lastUpdateRef = React.useRef(0);

  useFrame((state) => {
    const currentTime = state.clock.getElapsedTime() * 1000;

    let metrics = getMetrics();
    let buildings = map.buildings;

    if (currentTime - lastUpdateRef.current >= 1000) {
      // Update incomes from offices
      // metrics.money = updateIncomes(map, metrics);

      // Apply metric relationships and constraints
      metrics = MetricsManager.updateMetrics(metrics, map);

      buildings = MetricsManager.updateBuildings(buildings, metrics);

      // Object.values(map.buildings).forEach((building: Building) => {
      // Object.values(effectMaps).forEach((effectMap) => {
      //   // Check if the building is in the effect map
      //   building.buildingCells.forEach((cell) => {
      //     console.log(building);
      //     if (effectMap[cell[0]][cell[1]] === 1) {
      //       // Apply the effect of the building
      //       console.log("in effect");
      //     }
      //   });
      // });
      // });

      metrics.inhabitants = Object.values(buildings).reduce(
        (acc, building) => acc + building.inhabitants,
        0
      );

      setMetrics(metrics);
      lastUpdateRef.current = currentTime;
    }
  });

  return <></>;
}

export default GameLoop;