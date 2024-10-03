import React from "react";

export interface CardGridProps {
  children: React.ReactNode;
}

function CardGrid({ children }: CardGridProps) {
  return (
    <main className="w-full flex justify-center">
      <ul className="w-full p-5 grid gap-7 md:gap-5 md:grid-cols-3 grid-cols-1 max-w-screen-xl place-content-center md:pb-8">
        {children}
      </ul>
    </main>
  );
}

export default CardGrid;
