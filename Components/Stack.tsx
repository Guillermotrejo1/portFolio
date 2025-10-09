import React from "react";
import { TechStack } from "./TechStack";

export const Stack = () => {
  return (
    <section id="tech">
      <div className="container flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap w-full lg:w-1/2">
          <TechStack />
        </div>
      </div>
    </section>
  );
};
