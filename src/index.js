import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function handleRefresh() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "tomato",
    "black",
    "pink",
    "violet"
  ];
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
}

root.render(
  <div>
    <h1 style={{ color: handleRefresh() }}>Hello World!</h1>
    <p style={{ color: handleRefresh() }}>Nama Saya Joshua</p>
    <p style={{ color: handleRefresh() }}>Saya Manusia Tertampan dan Berani</p>
    <p style={{ color: handleRefresh() }}>Saya Kayanya Belajar JavaScript</p>
    <p style={{ color: handleRefresh() }}>
      Saya Kayanya Mahasiswa yang Berbakat
    </p>
    <p style={{ color: handleRefresh() }}>
      Ku ingin menjadi superstar kaya dan terkenal
    </p>
    <p style={{ color: handleRefresh() }}>
      ku ingin menjadi saudagar yang punya banyak akal
    </p>
    <p style={{ color: handleRefresh() }}>
      ku ingin menjadi bangsawan,menjadi kiayi
    </p>
    <p style={{ color: handleRefresh() }}>aku ingin dicintai</p>
  </div>
);
