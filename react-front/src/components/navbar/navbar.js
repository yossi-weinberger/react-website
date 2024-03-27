import { links } from "../../data/links.js";
import "./navbar.css";
import { nanoid } from "nanoid";

export default function Navbar() {
  return (
    <div className="container">
      <ul className="link-list">
        {links
          .filter((item) => !item.excluded)
          .map((link) => (
            <NavItem key={nanoid()} link={link} />
          ))}
      </ul>
    </div>
  );
}

function NavItem({ link }) {
  return (
    <li className="list-item">
      <a
        className={`link ${
          window.location.pathname === link.href && "current "
        }`}
        href={link.href}
      >
        {link.title}
      </a>
    </li>
  );
}
