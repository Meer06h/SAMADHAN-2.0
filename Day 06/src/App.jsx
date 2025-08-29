import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>🌟 Our Creative Team 🌟</h1>
      <div className="card-grid">
        <ProfileCard 
          img="https://i.pravatar.cc/150?img=1"
          name="Eliza Markove"
          role="Frontend Developer"
          desc="Passionate about building modern, responsive, and interactive web apps."
        />
        <ProfileCard 
          img="https://i.pravatar.cc/150?img=2"
          name="Aarav Sharma"
          role="Backend Developer"
          desc="Specializes in Node.js, Express, and databases for scalable apps."
        />
        <ProfileCard 
          img="https://i.pravatar.cc/150?img=3"
          name="Michael Anderson"
          role="UI/UX Designer"
          desc="Designing intuitive interfaces and smooth user experiences."
        />
        <ProfileCard 
          img="https://i.pravatar.cc/150?img=4"
          name="Sophia Patel"
          role="Full Stack Developer"
          desc="Bringing frontend and backend together to deliver complete solutions."
        />
      </div>
    </div>
  );
}