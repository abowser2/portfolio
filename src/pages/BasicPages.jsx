import { Link } from "react-router";
import headshot from "../assets/headshot.jpg";


export function Home() {
  return <section><h1>Alex Rivera</h1>
    <img src={headshot} alt="Headshot of Alex Rivera" />
    <Link to="/projects">Explore my projects</Link>
    <p>
      <a href={`${import.meta.env.BASE_URL}resume.pdf`}>
        Download resume
      </a>
    </p>
  </section>;
}


export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>Education</h2>
      <h3>Riverbend University</h3>
      <p>Bachelor's Degree in Computer Science</p>
      <p>Relevant coursework: Web Technologies, Data Structures, and Human-Computer Interaction.</p>

      <h2>Technical Skills</h2>
      <ul>
        <li>JavaScript and React</li>
        <li>HTML and CSS</li>
        <li>Git and GitHub</li>
        <li>HTTP and Networking</li>
        <li>Responsive and Accessible Web Design</li>
      </ul>

      <h2>Experience</h2>

      <h3>Student Technology Assistant</h3>
      <p><em>Riverbend University | 2025–Present</em></p>
      <ul>
        <li>Helped students troubleshoot common software and computer issues.</li>
        <li>Documented technical problems and explained solutions in clear, accessible language.</li>
      </ul>

      <h3>Web Development Coursework</h3>
      <p><em>Riverbend University | 2025–Present</em></p>
      <ul>
        <li>Built a React portfolio with reusable components and interactive project filtering.</li>
        <li>Implemented page navigation, dynamic project details, and a persistent dark theme.</li>
      </ul>
    </section>
  );
}

export function Contact() {
    return <section><h1>Contact</h1>
        <p>This fictional person has no real contact address.</p></section>;
}

export function NotFound() {
    return <section><h1>Page not found</h1>
        <Link to="/">Return home</Link></section>;
}