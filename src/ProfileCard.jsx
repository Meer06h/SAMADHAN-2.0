import React from "react";

export default function ProfileCard({ img, name, role, desc }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{desc}</p>
      <div className="buttons">
        <button className="connect">Connect</button>
        <button className="message">Message</button>
      </div>
    </div>
  );
}
