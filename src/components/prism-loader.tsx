"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-go";
import "prismjs/components/prism-css";

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className="hidden"></div>;
}
