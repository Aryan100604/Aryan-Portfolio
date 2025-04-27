import React from "react";
import mock10 from "../assets/images/mock10.png";
import service from "../assets/images/service.png";
import evento from "../assets/images/Evento.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Aryan100604/EventO"
            target="_blank"
            rel="noreferrer"
          >
            <img src={evento} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Aryan100604/EventO"
            target="_blank"
            rel="noreferrer"
          >
            <h2>EventO</h2>
          </a>
          <p>
            An event planning website built with Laravel that helps users organize and manage events efficiently.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Aryan100604/service-buddy"
            target="_blank"
            rel="noreferrer"
          >
            <img src={service} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Aryan100604/service-buddy"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Service Buddy</h2>
          </a>
          <p>
            A service management application built with React and Node.js that helps users manage and track various services.
          </p>
        </div>
        <div className="project">
          <a
            href="https://habit-tracker-proto.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://habit-tracker-proto.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Track It</h2>
          </a>
          <p>
            Track it empowers you to organize your aspirations into clear goal
            categories and cultivate consistent habits to achieve them, all in
            one intuitive app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
