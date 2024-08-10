"use client";

import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function NewsletterSubscribe() {
  const { theme } = useTheme();

  return (
    <MagicCard
      className="shadow-2xl whitespace-nowrap text-4xl py-4 px-4 w-full"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <form className="w-full flex items-center gap-5">
        <Input
          className="flex-grow"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Button type="submit">Subscribe To Newsletter</Button>
      </form>
    </MagicCard>
  );
}
