import React from "react";
import { TechStack } from "./TechStack";
import { ComposingQuote } from "./ComposingQuote";
import { LandingNotes } from "./LandingNotes";

export const Stack = () => {
  return (
    <section id="tech" className="relative z-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-wrap justify-center">
          <TechStack />
          <ComposingQuote />
          <LandingNotes />
        </div>
      </div>
    </section>
  );
};
