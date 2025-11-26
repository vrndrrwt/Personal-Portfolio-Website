import React from "react";
export default function EmojiBullet({ emoji, text }) {
  return (
    <li style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 20 }}>{emoji}</span>
      <span>{text}</span>
    </li>
  );
}
