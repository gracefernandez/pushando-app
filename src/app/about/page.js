// src/pages/about.js

import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/"style={{ marginRight: '15px' }}>
         Home
        </Link>
      </nav>
      <h1>About Us</h1>
      <p>
        Welcome to our application! We are dedicated to providing the best service possible.
        Our team is focused on delivering high-quality products that meet the needs of our users.
      </p>
      <p>
        Our vision is to be the go-to reliable partner in transformative software development.
        Our mission is to architect seamless, user-centric products that are meticulously designed
        to elevate operational efficiency and drive data-informed decision-making, enabling our
        clients to outpace competition and capture market success. By employing best practices and
        innovative approaches, we aim to contribute to a culture of excellence and innovation within
        our team and organization.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Relentless Focus on Results</li>
        <li>Unwavering Integrity</li>
        <li>Excellence</li>
        <li>Continuous Learning</li>
        <li>Inclusive Teamwork</li>
      </ul>
    </div>
  );
}
