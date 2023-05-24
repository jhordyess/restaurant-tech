import * as React from "react";

export default function Menu() {
  return (
    <section className="flex flex-col items-center py-6 gap-y-6">
      <h1 className="text-lg">Menu</h1>
      <section className="w-64 mx-auto flex flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Hamburger?"
          className="w-full h-8 border px-2 text-sm box-content outline-none"
        />
        <button className="p-1 border hover:bg-red-100 hover:border-red-100 box-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-6 h-6"
            viewBox="0 0 100 100"
            stroke="currentColor"
          >
            <circle cx="45" cy="45" r="18" strokeWidth="5" />
            <line x1="55" y1="55" x2="75" y2="75" strokeWidth="5" />
          </svg>
        </button>
      </section>
      <section></section>
    </section>
  );
}
