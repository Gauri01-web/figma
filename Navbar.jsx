import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white">
      <div className="text-2xl font-bold">Positivus</div>
      <ul className="flex space-x-6 font-medium">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <button className="bg-black text-white px-5 py-2 rounded-full">Request a quote</button>
    </nav>
  );
};

export default Navbar;