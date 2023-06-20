import React from "react";

export default function Home() {
  const name = "Linda";
  const age = 20;
  return (
    <div>
      <div>
        <h4 className="title">안녕</h4>
        <p className="title-sub">
          by {name}/{age}
        </p>
        <a href="">링크</a>
      </div>
    </div>
  );
}
