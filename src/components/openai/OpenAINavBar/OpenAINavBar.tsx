import Link from "next/link";
import React from "react";

const links = [
  { href: "/next-openai/clients", label: "client" },
  { href: "/next-openai/drinks", label: "drinks" },
  { href: "/next-openai/prisma-example", label: "prisma" },
  { href: "/next-openai/tasks", label: "tasks" },
];
export default function OpenAINavBar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex sm-flex-row">
        <Link href="/next-openai" className="btn btn-primary text-3xl">
          Next and OpenAi
        </Link>
        <ul className="menu menu-horizontal grid grid-cols-4 gap-16 md:ml-8">
          {links.map((link) => {
            return (
              <li
                key={link.href}
                className="text-2xl bg-blue-600 w-24 rounded-lg text-center"
              >
                <Link href={link.href} className="capitilize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
