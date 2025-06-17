import Link from "next/link";
import React from "react";

const links = [
  {
    name: "HOME",
    path: "/",
  },

  {
    name: "ABOUT",
    path: "/about",
  },

  {
    name: "PROJECTS",
    path: "/projects",
  },

  {
    name: "CONTACT",
    path: "/contact",
  },
];


const NavLinks = () => {
  return (
    <div>
      <ul className="flex flex-col sm:flex-row sm:px-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="block px-6 py-2 hover:text-accent transition-colors"
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
