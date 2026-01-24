import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./About.css";

const About = () => (
  <section className="about" id="about">
    <div className="about-content">
      <div className="about-left">
        <h2>About Me</h2>
        <div className="about-img">
          <img src="/images/me.jpg" alt="Profile" />
        </div>
        <div className="about-social">
          <a href="https://www.linkedin.com/in/mohit-kadu-856410243/" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/mavdsilva/" title="GitHub"><FaGithub /></a>
          <a href="mailto:mohitkadu13@gmail.com" title="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className="about-right">
        <h3>Maverick D'Silva</h3>
        <ul className="about-points">
          <li>Full Stack web Developer & AI Enthusiast</li>
          <li>Web Development, App development, IOT</li>
          <li>Designing solutions with real-world impact</li>
          <li>Self-taught and continuously exploring emerging technologies</li>
          <li>Detail-oriented, proactive, and solution-driven</li>
          <li>Transforming ideas into intelligent, functional projects</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
