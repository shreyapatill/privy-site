// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#our-story">Our Story</a>
        </li>
        <li>
          <a href="#join-team">Join Our Team</a>
        </li>
        <li>
          <a href="#share-story">Share Your Story</a>
        </li>
        <li>
          <a href="#newsletter">Newsletter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
