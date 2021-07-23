import React from "react";

export default function FilterButton({ label, isPressed, setFilter }) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(label)}
    >
      <span className="visually-hidden">Show </span>
      <span>{label}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
