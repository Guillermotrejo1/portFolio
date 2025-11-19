import React from "react";
import { TechStack } from "./TechStack";
import { ComposingQuote } from "./ComposingQuote";
import { LandingNotes } from "./LandingNotes";

export const Stack = () => {
  return (
    <section id="tech" className="relative z-10">
      <div className="container flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap w-full lg:w-1/2">
          <TechStack />
          <ComposingQuote />
          <LandingNotes />
        </div>
      </div>
    </section>
  );
};
