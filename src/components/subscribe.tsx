"use client";

import React, { useState } from "react";
import { MagicCard } from "./magicui/magic-card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import gqlQuery from "@/lib/gql-queries";
import { useToast } from "./ui/use-toast";

export default function NewsletterSubscribe() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = React.useRef<HTMLFormElement>(null);

  const [mutateNewsletter] = useMutation(gqlQuery.SUBSCRIBE_NEWSLETTER);

  let { data, error } = useQuery(gqlQuery.GET_PUBLICATION);
  if (error) {
    console.error(error);
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      await mutateNewsletter({
        variables: {
          input: {
            email: email,
            publicationId: data.publication.id,
          },
        },
      });

      // Success
      toast({
        title: "📧 Check your email to confirm!",
        description:
          "You will start receiving newsletters as soon as you confirm the subscription.",
      });
    } catch (mutaError: ApolloError | any) {
      if (mutaError?.message === "Email already subscribed") {
        toast({
          title: "WOOHOO! Already Subscribed 🎉",
          description:
            "You are already subscribed to the newsletter with this email.",
        });
      } else {
        toast({
          title: "Error",
          description: "Please check your input or try again later.",
          variant: "destructive",
        });
      }
    } finally {
      form.current?.reset();
      setLoading(false);
    }
  }

  return (
    <MagicCard
      className="shadow-2xl whitespace-nowrap text-4xl py-4 px-4 w-full"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-5"
      >
        <Input
          className="flex-grow"
          disabled={loading}
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        />
        <Button disabled={loading} type="submit">
          {loading ? "Subscribing..." : "Subscribe To Newsletter"}
        </Button>
      </form>
    </MagicCard>
  );
}

// Usage:
// Validates email input
// Returns true if email is valid
function validateEmail(email: string) {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(email);
}
