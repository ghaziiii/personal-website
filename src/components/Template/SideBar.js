import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ghazi Aousaji</h2>
        <p><a href="mailto:ghazi.aoussaji@gmail.com">ghazi.aoussaji@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ghazi. I like building things.
        I am an electrical engineer and microelectronics is my major.
        I have a solid background in wireless communication and electronics.
        I am currently pusrsuing a PhD at IMT Atlantique in France.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ghazi Aousaji <Link to="/">ghazi_aousaji.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
