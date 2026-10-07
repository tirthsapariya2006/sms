"use client"

import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
