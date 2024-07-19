"use client";
import { useEffect, useRef } from "react";

// TODO: Implement the lamp animation hook

export default function useLampAnimation() {
  const blinkComponent = useRef(null);
  useEffect(() => {}, []);
  return { blinkComponent, Lamp };
}

function Lamp() {
  return <div></div>;
}
