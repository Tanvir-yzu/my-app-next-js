import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <button className="btn glass">Home</button>
      </Link>
      {children}
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
