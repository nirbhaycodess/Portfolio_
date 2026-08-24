import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto max-width py-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-dark-content dark:text-light-content">© {new Date().getFullYear()} Nirbhay Yadav — Rampur ,UttarPradesh ,India</p>
        <p className="text-sm text-dark-content dark:text-light-content mt-2 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
