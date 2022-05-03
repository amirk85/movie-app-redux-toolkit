import React from "react";
import { useSelector } from "react-redux";

export default function Seasons() {
  const seasonData = useSelector((state) => state.global.seasonData);
  console.log(seasonData);

  return <div>Seasons here!</div>;
}
