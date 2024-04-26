import React from "react";

interface cardProps {
  img: string;
  url: string;
  title: string;
  year: string;
}

function Card({ img, url, title, year }: cardProps) {
  return (
    <li className="hover:opacity-70 transition ease-in-out delay-150 max-h-60 flex">
      <a href={url} className="ring-1 ring-slate-300 flex flex-col rounded">
        <img
          src={img}
          alt="RCRD site v1"
          className="w-full bg-gray-800 min-h-48 object-left-top	object-cover"
        />
        <div className="p-2 flex justify-between items-center border-t border-slate-300">
          <span>{title}</span>
          <span className="text-xs">{year}</span>
        </div>
      </a>
    </li>
  );
}

export default Card;
